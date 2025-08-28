import styles from "./ContactItem.module.css";

function ContactItem({data:{name,lastname,email,phone,id}, deleteHandler}) {
  return (
    <div>
         <li className={styles.item}>
            <p>{name} {lastname}</p>
            <p><span>📧</span>{email}</p>
            <p><span>📱</span>{phone}</p>
            <button onClick={()=>deleteHandler(id)}>Delete</button>
          </li>
    </div>
  )
}

export default ContactItem