import styles from "./style.module.css"
import { Link } from "react-router-dom";

export default function Headings() {
  return (
    <div className={styles.headings}>
        <p className={styles.p}>Work</p>
        <div className={styles.navigation}>
            <button className={styles.button}>
                <Link to="/" className={styles.a}>All Works</Link>
            </button>
            <button className={styles.button}>
                <Link to="/" className={styles.a}>Branding</Link>
            </button>
            <button className={styles.button}>
                <Link to="/" className={styles.a}>Website</Link>
            </button>
        </div>
    </div>
  )
}
