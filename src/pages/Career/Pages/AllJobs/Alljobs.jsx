import styles from "./style.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import React from 'react'

function Alljobs() {
  return (
    <div className={styles.main}>
        <div className={styles.container}>
            <h1>Career at HARAAY</h1>
            <p>Open Position <FontAwesomeIcon icon={faArrowRight} className={styles.arrowright} /></p>
            <div className={styles.jobs}>
                <p>UI/UX Designer</p>
            </div>
            <div className={styles.jobs}>
                <p>Fron-End Developer</p>
            </div>
            <div className={styles.jobs}>
                <p>Back-End Developer</p>
            </div>
            <div className={styles.jobs}>
                <p>Visual Designer</p>
            </div>
            <div className={styles.jobs}>
                <p>Graphic Designer</p>
            </div>
            <a href="/applynow">
              <button className={styles.button}>Apply Now</button>
            </a>
        </div>
    </div>
  )
}

export default Alljobs