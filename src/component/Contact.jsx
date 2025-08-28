import { useState } from "react"
import ContactsList from "./ContactsList"
import { v4 } from "uuid"

import styles from "./Contact.module.css"

function Contact() {
    const [contacts, setContacts] = useState([])
    const [alert, setAlert] = useState("")
    const [contact, setContact] = useState({
        id : "",
        name: "",
        lastname:"",
        email:"",
        phone:""
    })

    const deleteHandler = (id) =>{
        const newContacts = contacts.filter((contact) => contact.id !== id)
        setContacts(newContacts)
    }

    const changeHandler = (event)=>{
        const name = event.target.name
        const value = event.target.value
        setContact((contact)=> ({...contact, [name] : value}))
    }
    const addhandler = ()=>{
        if (!contact.name ||
            !contact.lastname ||
            !contact.phone) {
            setAlert("please enter valid data!");
            return; 
        }
        setAlert("");
        const newContacts = {... contact, id:v4()}
        setContacts((contacts)=>[...contacts,newContacts])
        setContact({
        name: "",
        lastname:"",
        email:"",
        phone:""
    })
    console.log(contacts)
    }

  return (
    <div className={styles.container}>
        <div className={styles.form}>
            <input type="text" placeholder="Name" value={contact.name} onChange={changeHandler} name="name" />
            <input type="text" placeholder="Last Name" value={contact.lastname} onChange={changeHandler} name="lastname" />
            <input type="email" placeholder="Email" value={contact.email} onChange={changeHandler} name="email" />
            <input type="number" placeholder="Phone" value={contact.phone} onChange={changeHandler} name="phone" />
            <button onClick={addhandler}>Add Contact</button>
        </div>
        <div className={styles.alert}>
            {alert && <p>{alert}</p>}
        </div>
        <ContactsList contacts={contacts} deleteHandler={deleteHandler}/>
    </div>
  )
}

export default Contact