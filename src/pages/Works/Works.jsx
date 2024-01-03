import AnimatedComponent from "../../components/AnimatedComponent"
import Card from "./components/Card"
import { Helmet } from "react-helmet"
import Headings from "./components/Headings"
import styles from "./style.module.css"

function Works() {
  return (
    <AnimatedComponent>
      <Helmet>
        <title>Works</title>
      </Helmet>
    <div className={styles.container}>
      <Headings />
      <Card />
    </div>
    </AnimatedComponent>
  )
}

export default Works