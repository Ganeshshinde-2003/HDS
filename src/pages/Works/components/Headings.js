import styles from "./style.module.css"

export default function Headings() {
  return (
    <div className={styles.headings}>
        <p className={styles.p}>Work</p>
        <div className={styles.navigation}>
            <button className={styles.button}>
                <a href="/" className={styles.a}>All Works</a>
            </button>
            <button className={styles.button}>
                <a href="/" className={styles.a}>Branding</a>
            </button>
            <button className={styles.button}>
                <a href="/" className={styles.a}>Website</a>
            </button>
        </div>
    </div>
  )
}
