import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";
import AnimatedComponent from "../../../../components/AnimatedComponent";
import emailjs from "@emailjs/browser";

function ApplyNow() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [resume, setResume] = useState("");
  const [number, setNumber] = useState("");
  const [desc, setDesc] = useState("");
  const [isSuccessAlert, setIsSuccessAlert] = useState(false);
  const [isErrorAlert, setIsErrorAlert] = useState(false);
  const [errormsg, setErrormsg] = useState(
    "Submission failed. Please try again."
  );
  const form = useRef();
  const navigate = useNavigate();
  // hello@haraaydesignstudio.com
  const data = {
    firstName,
    lastName,
    email,
    number,
    resume,
    portfolio,
    description: desc,
  };
  const submitData = async (e) => {
    e.preventDefault();

    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      email.trim() === "" ||
      number.trim() === "" ||
      resume.trim() === "" ||
      portfolio.trim() === ""
    ) {
      setErrormsg("Please fill in all required fields.");
      setIsErrorAlert(true);
      setTimeout(() => {
        setIsErrorAlert(false);
      }, 2000);
      return;
    }

    try {
      await fetch("https://hds-backend.onrender.com/api/application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      emailjs
        .sendForm(
          "service_ftzflyq",
          "template_iltqpu8",
          form.current,
          "RDb3wdP9PFxvPNs7-"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setIsSuccessAlert(true);
      setTimeout(() => {
        setIsSuccessAlert(false);
        setTimeout(() => {
          navigate("/about");
          window.scrollTo(0, 0);
        }, 1000);
      }, 2000);
    } catch (error) {
      setErrormsg("Network Error!");
      setIsErrorAlert(true);
      setTimeout(() => {
        setIsErrorAlert(false);
      }, 2000);
    }
  };

  return (
    <AnimatedComponent>
      <div className={styles.main}>
        <div className={styles.container}>
          <form ref={form}>
            <div className={styles.name}>
              <input
                type="text"
                required
                name="FirstName"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                required
                name="LastName"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <input
              type="email"
              required
              name="EmailAddress"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              required
              name="PhoneNo"
              placeholder="Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              pattern="[0-9()-\s]+"
            />
            <div className={styles.resume}>
              <div className={styles.resumename}>Resume/CV</div>
              <input
                type="url"
                value={resume}
                onChange={(e) => setResume(e.target.value)}
                placeholder="Upload on Drive and provide link"
                required
              />
            </div>
            <input
              type="url"
              required
              placeholder="Portfolio Link"
              value={portfolio}
              onChange={(e) => setPortfolio(e.target.value)}
            />
            <textarea
              rows="7"
              cols="10"
              name="message"
              placeholder="Personal Note"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <button className={styles.button} onClick={submitData}>
              SUBMIT APPLICATION
            </button>
          </form>
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

export default ApplyNow;
