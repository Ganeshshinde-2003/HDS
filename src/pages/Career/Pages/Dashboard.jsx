import styles from "./style.module.css";
import React from "react";
import AnimatedComponent from "../../../components/AnimatedComponent";
import Career from "../../../assets/Nacemos con  creatividad  ó nos volvemos creativos en el proceso_.jpg";
import { Link } from "react-router-dom";

function CareerDashboard() {
  return (
    <AnimatedComponent>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1>Working at HARAAY</h1>
            <p>Fueled by passion</p>
            <p>
              Our company is a connection enabler, We start with people. We
              invest in discovery and understanding ensuring our approach keeps
              empathy and people at its core. Through this we seek to connect
              captivate and inspire; creating meaningful and measurable outcomes
              partnerships and cultures <br />
              <br />
              To consistently achieve this we give the world's most talented
              people the time and support needed to create projects that are the
              best that they could possibly be. We foster a relaxed working
              enviornment, we exclusvely hire the most talented young creatives,
              and we make their lives happy and healty. <br />
              <br />
              Do you think you have what it takes to make something defferent?
              Are you looking for better work culture? We have increased in size
              over the period of time and we don't want it to stop. Show us your
              huge moves and creativity game and join the rapidly growing design
              agency.
            </p>
            <Link to="/alljobs">
              <button className={styles.button}>Search All Jobs</button>
            </Link>
          </div>
          <div className={styles.image}>
            <img src={Career} alt="APPLY FOR JOB" />
          </div>
        </div>
      </main>
    </AnimatedComponent>
  );
}

export default CareerDashboard;
