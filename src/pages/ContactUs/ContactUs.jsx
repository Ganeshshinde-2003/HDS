import React, { useEffect, useState, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";
import AnimatedComponent from "../../components/AnimatedComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet"

function ContactUs() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [desc, setDesc] = useState("");
  const [isSuccessAlert, setIsSuccessAlert] = useState(false);
  const [isErrorAlert, setIsErrorAlert] = useState(false);
  const [jobTitle, setJobTitle] = useState("");
  const [enquiry, setEnquiry] = useState("");
  const [errormsg, setErrormsg] = useState(
    "Submission failed. Please try again."
  );
  const form = useRef();
  const navigate = useNavigate();

  const data = {
    firstName,
    lastName,
    email,
    companyName,
    description: desc,
    jobTitle,
    enquiryType: enquiry,
  };

  const submitData = async (e) => {
    e.preventDefault();

    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      email.trim() === ""
    ) {
      setErrormsg("Please fill in all required fields.");
      setIsErrorAlert(true);
      setTimeout(() => {
        setIsErrorAlert(false);
      }, 2000);
      return;
    }

    try {
      await fetch("https://hds-backend.onrender.com/api/contact", {
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
          navigate("/");
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
       <Helmet>
        <title>Get In Touch</title>
      </Helmet>
      <div className={styles.main}>
        <div data-aos="fade-up" className={styles.container}>
          <p className={styles.h1}>IT’S TIME TO CONNECT</p>
          <p className={styles.lets}>LET'S CHAT ABOUT YOUR GOALS</p>
          <p className={styles.heading3}>
            <span>YOU HAVE A PROJECT ? </span>
            <br />
            <i>
              YOU WANT TO JOIN US <br />
              LET'S TALK OVER A COFFEE
            </i>
          </p>
        </div>
        <div data-aos="fade-up" className={styles.card}>
          <form ref={form}>
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
              placeholder="Email"
              name="EmailAddress"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Company Name (Optional)"
              name="PhoneNo"
              required
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Job Title (Optional)"
              name="jobTitle"
              required
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
            <select
              name="enquiryType"
              required
              value={enquiry}
              onChange={(e) => setEnquiry(e.target.value)}
            >
              <option value="" disabled hidden>
                Enquiry Type
              </option>
              <option value="BusinessEnquiry">Business Enquiry </option>
              <option value="WorkWithUs">Work With Us</option>
              <option value="Other">Other</option>
            </select>
            <textarea
              rows="7"
              cols="10"
              name="message"
              placeholder="How Can We Help You?"
              required
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <button className={styles.button} onClick={submitData}>
              Send Message
            </button>
          </form>
        </div>
        <div data-aos="fade-up" className={styles.contactusinfo}>
          <div className={styles.contactusmail}>
            <p className={styles.pone}> Send us Mail at </p>
            <p className={styles.ptwo}>hello@haraaydesignstudio.com</p>
          </div>
          <div className={styles.contactusmail}>
            <p className={styles.pone}> Give us a call </p>
            <p className={styles.ptwo}> +91 7498376495 </p>
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
