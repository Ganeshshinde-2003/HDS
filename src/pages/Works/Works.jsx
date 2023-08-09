import AnimatedComponent from "../../components/AnimatedComponent"
import Card from "./components/Card"
import Headings from "./components/Headings"
import styles from "./style.module.css"

function Works() {
  return (
    <AnimatedComponent>
    <div className={styles.container}>
      <Headings />
      <Card />
    </div>
    </AnimatedComponent>
  )
}

export default Works