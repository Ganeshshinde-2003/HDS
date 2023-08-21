import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";
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
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [desc, setDesc] = useState("");
  const [isSuccessAlert, setIsSuccessAlert] = useState(false);
  const [isErrorAlert, setIsErrorAlert] = useState(false);
  const [errormsg, setErrormsg] = useState(
    "Submission failed. Please try again."
  );

  const navigate = useNavigate();

  const data = {
    firstName,
    lastName,
    email,
    number,
    description: desc,
  };

  const submitData = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://hds-backend.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccessAlert(true);
        setTimeout(() => {
          setIsSuccessAlert(false);
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }, 2000);
      } else {
        setIsErrorAlert(true);
        setTimeout(() => {
          setIsErrorAlert(false);
        }, 2000);
      }
    } catch (error) {
      setErrormsg("Network Error!");
    }
  };

  return (
    <AnimatedComponent>
      <div className={styles.main}>
        <div data-aos="fade-up" className={styles.container}>
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
        <div data-aos="fade-up" className={styles.card}>
          <form>
            <div className={styles.heading}>
              <p>Send a message</p>
              <FontAwesomeIcon
                icon={faEnvelopeOpenText}
                className={styles.mail}
              />
            </div>
            <div className={styles.name}>
              <input
                type="text"
                required
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                required
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone"
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <textarea
              rows="7"
              cols="10"
              placeholder="How Can We Help You?"
              required
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <button className={styles.button} onClick={submitData}>
              Send Message
            </button>
          </form>
          <div className={styles.addr}>
            <p className={styles.head}>Contact info</p>
            <div className={styles.links}>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className={styles.mail} />
                {"     "}
                hello@haraaydesignstudio.com
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} className={styles.mail} />
                +91 74983 76495
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
        {isSuccessAlert && (
          <div
            className={`${styles.alertContainer} ${styles.alertSuccess} ${styles.slideIn}`}
          >
            Successfully submitted!
          </div>
        )}
        {isErrorAlert && (
          <div
            className={`${styles.alertContainer} ${styles.alertError} ${styles.slideIn}`}
          >
            {errormsg}
          </div>
        )}
      </div>
    </AnimatedComponent>
  );
}

export default ContactUs;
