import styles from "./header.module.css"
function Header() {
  return (
    <div className={styles.container}>
        <h1>Contact App</h1>
        <p>
            <a href="https://shojaeinasab.ir">Shojaeinasab</a> | Project Contact App
        </p>
    </div>
  )
}

export default Header