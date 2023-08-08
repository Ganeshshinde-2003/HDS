import Card from "./components/Card"
import Headings from "./components/Headings"
import styles from "./style.module.css"

function Works() {
  return (
    <div className={styles.container}>
      <Headings />
      <Card />
    </div>
  )
}

export default Works