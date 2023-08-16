import React from "react";
import styles from "./style.module.css";
import AnimatedComponent from "../../components/AnimatedComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpenText,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";

function ContactUs() {
  return (
    <AnimatedComponent>
      <div className={styles.main}>
        <div className={styles.container}>
          <p className={styles.h1}>IT’S TIME TO CONNECT</p>
          <p className={styles.lets}>
            LET'S CHAT ABOUT
            <br />
            <i>YOUR GOALS</i>
          </p>
          <p>
            YOU HAVE A PROJECT ? <br />
            YOU WANT TO JOIN US <br />
            LET'S TALK OVER A COFFEE
          </p>
        </div>
        <div className={styles.card}>
          <form>
            <div className={styles.heading}>
              <p>Send a message</p>
              <FontAwesomeIcon
                icon={faEnvelopeOpenText}
                className={styles.mail}
              />
            </div>
            <div className={styles.name}>
              <input type="text" required placeholder="First Name" />
              <input type="text" required placeholder="Last Name" />
            </div>
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Phone" required />
            <textarea
              rows="7"
              cols="10"
              placeholder="How Can We Help You?"
              required
            />
            <button className={styles.button}>Send Message</button>
          </form>
          <div className={styles.addr}>
            <p className={styles.head}>Contact info</p>
            <div className={styles.links}>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className={styles.mail} />{'     '}
                hellohuge@gmail.com
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} className={styles.mail} />
                +91 749-837-6495
              </p>
              <p>
                Follow Us On:
                <a href="https://www.linkedin.com/company/haraaydesignstudio/">
                  <FontAwesomeIcon className={styles.link} icon={faLinkedin} />
                </a>
                <a href="https://www.facebook.com/Hugedesign.in">
                  <FontAwesomeIcon className={styles.link} icon={faFacebook} />
                </a>
                <a href="https://www.instagram.com/haraay_studio/">
                  <FontAwesomeIcon className={styles.link} icon={faInstagram} />
                </a>
                <a href="https://www.behance.net/helloharaaystudio">
                  <FontAwesomeIcon className={styles.link} icon={faBehance} />
                </a>
              </p>
            </div>
            <div className={styles.address}>
              <p>Address:</p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedComponent>
  );
}

export default ContactUs;
