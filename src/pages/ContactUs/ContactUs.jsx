import React from "react";
import styles from "./style.module.css";
import AnimatedComponent from "../../components/AnimatedComponent";

function ContactUs() {
  return (
    <AnimatedComponent>
      <div className={styles.container}>
        <p className={styles.h1}>IT’S TIME TO CONNECT</p>
        <p className={styles.lets}>
          LET'S CHAT ABOUT
          <br />
          YOUR GOALS
        </p>
        <p>
          YOU HAVE A PROJECT ? <br />
          YOU WANT TO JOIN US <br />
          LET'S TALK OVER A COFFEE
        </p>
        <a href="/">
          <button className={styles.button}>Contact Us</button>
        </a>
        <div className={styles.contactus}>
          <p className={styles.mail}>hello@haraaydesignstudio.com</p>
          <p className={styles.number}>+91 7498376495</p>
        </div>
      </div>
    </AnimatedComponent>
  );
}

export default ContactUs;
