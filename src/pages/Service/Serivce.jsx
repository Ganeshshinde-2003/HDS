import { useEffect } from "react";
import styles from "./style.module.css";
import AnimatedComponent from "../../components/AnimatedComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css"

import React from "react";

function Serivce() {
  useEffect(() => {
    const secpart = document.querySelector(`.${styles.secpart}`);
    const thirdpart = document.querySelector(`.${styles.thirdpart}`);
    const forthpart = document.querySelector(`.${styles.forthpart}`);
    const lastpart = document.querySelector(`.${styles.lastpart}`);
    const sticky = document.querySelector(`.${styles.stickyparent}`);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPositionSec = secpart.offsetTop - window.innerHeight / 2;
      const triggerPositionThird = thirdpart.offsetTop - window.innerHeight / 2;
      const triggerPositionFourth =
        forthpart.offsetTop - window.innerHeight / 2;
      const triggerPositionLast = lastpart.offsetTop - window.innerHeight / 2;
      const stickyPart = sticky.offsetTop - window.innerHeight / 2;

      if (scrollPosition > triggerPositionSec) {
        secpart.classList.add(styles.changeColor);
      } else {
        secpart.classList.remove(styles.changeColor);
      }

      if (scrollPosition > triggerPositionThird) {
        thirdpart.classList.add(styles.changeColorthird);
      } else {
        thirdpart.classList.remove(styles.changeColorthird);
      }
      if (scrollPosition > triggerPositionFourth) {
        forthpart.classList.add(styles.changeColorfour);
      } else {
        forthpart.classList.remove(styles.changeColorfour);
      }
      if (scrollPosition > stickyPart) {
        sticky.classList.add(styles.stickyColor);
      } else {
        sticky.classList.remove(styles.stickyColor);
      }
      if (scrollPosition > triggerPositionLast) {
        lastpart.classList.add(styles.lastPartColor);
      } else {
        lastpart.classList.remove(styles.lastPartColor);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
        Aos.init({duration: 1500});
    }, []);

  useEffect(() => {
    const texts = ["HAR", "AAY"];
    const stickySection = document.querySelector(`.${styles.sticky}`);
    const scrollSection = stickySection.querySelector(
      `.${styles.scrollsection}`
    );

    let textToShow = texts.join("");
    const existingTextElement = scrollSection.querySelector(
      `.${styles.dynamicP}`
    );
    if (existingTextElement) {
      existingTextElement.innerText = textToShow;
    } else {
      let tstCSS = document.createElement("p");
      tstCSS.innerText = textToShow;
      tstCSS.className = styles.dynamicP;
      scrollSection.appendChild(tstCSS);
    }

    const handleScroll = () => {
      const offset = stickySection.parentElement.offsetTop;
      let percentage = ((window.scrollY - offset) / window.innerHeight) * 100;
      percentage = percentage < 0 ? 0 : percentage > 100 ? 100 : percentage;
      scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatedComponent>
      <main>
        <div className={styles.header}>
          <p className={styles.headings}>
            We nurture & bring life <br /> to your huge <br /> ideas!
          </p>
          <p>
            WE WORK
            <br /> ON THREE KEY LEVELS
            <br /> ✱
          </p>
          <div className={styles.circle}>
            <FontAwesomeIcon icon={faArrowDown} className={styles.arrowdown} />
          </div>
        </div>
        <div data-aos="fade-up" className={styles.secpart}>
          <div className={styles.secfirst}>
            <div className={styles.head}>BRAND IDENTITY</div>
            <div className={styles.text}>
              Our mission to translate your brand strategy into a striking
              identity and design.
            </div>
          </div>
          <div className={styles.buttonspart}>
            <div className={styles.buttonRow}>
              <a href="/">
                <button className={styles.button}>Visual identity</button>
              </a>
              <a href="/">
                <button className={styles.button}>Brand strategy</button>
              </a>
              <a href="/">
                <button className={styles.button}>Packaging Design</button>
              </a>
            </div>
            <div className={styles.buttonRow}>
              <a href="/">
                <button className={styles.button}>Print visuals</button>
              </a>
              <a href="/">
                <button className={styles.button}>Brand audit</button>
              </a>
            </div>
            <div className={styles.buttonRow}>
              <a href="/">
                <button className={styles.button}>
                  Messaging & tone of voice
                </button>
              </a>
              <a href="/">
                <button className={styles.button}>Brand launch</button>
              </a>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className={`${styles.secpart} ${styles.thirdpart}`}>
          <div className={styles.secfirst}>
            <div className={styles.head}>DIGITAL EXPERIENCE </div>
            <div className={styles.text}>
              Your digital tools must obviously be designed to meet the needs
              and habits of your users, but it must also serve your business.We
              thus create sites that customers love to use: simple, fluid and
              stylish.
            </div>
          </div>
          <div className={styles.buttonspart}>
            <div className={styles.buttonRow}>
              <a href="/">
                <button className={styles.button}>UI / UX Design</button>
              </a>
              <a href="/">
                <button className={styles.button}>Audit & UX Design</button>
              </a>
              <a href="/">
                <button className={styles.button}>Design System</button>
              </a>
            </div>
            <div className={styles.buttonRow}>
              <a href="/">
                <button className={styles.button}>Showcase Site</button>
              </a>
              <a href="/">
                <button className={styles.button}>E-Commerce site</button>
              </a>
            </div>
            <div className={styles.buttonRow}>
              <a href="/">
                <button className={styles.button}>Web Development</button>
              </a>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className={`${styles.secpart} ${styles.forthpart}`}>
          <div className={styles.secfirst}>
            <div className={styles.head}>STRATEGY & IDEAS</div>
            <div className={styles.text}>
              Convincing a consumer, user, investor or future employee to trust
              you is hard. They have other requests,already habits, and very
              often little time to give you.So to successfully create a strong
              and coherent brand, to convince, unite and shine, you have to lay
              a solid strategic foundation.
            </div>
          </div>
          <div className={styles.buttonspart}>
            <div className={styles.buttonRow}>
              <a href="/">
                <button className={styles.button}>Target Scan</button>
              </a>
              <a href="/">
                <button className={styles.button}>Positioning</button>
              </a>
            </div>
            <div className={styles.buttonRow}>
              <a href="/">
                <button className={styles.button}>Brand Platform</button>
              </a>
              <a href="/">
                <button className={styles.button}>Social Strategy</button>
              </a>
            </div>
            <div className={styles.buttonRow}>
              <a href="/">
                <button className={styles.button}>Content Strategy</button>
              </a>
              <a href="/">
                <button className={styles.button}>Digital Strategy</button>
              </a>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className={styles.stickyparent}>
          <div className={styles.sticky}>
            <div className={styles.scrollsection}></div>
          </div>
        </div>
        <div data-aos="fade-up" className={styles.lastpart}>
          <p>
            YOU HAVE A BEAUTIFUL
            <br /> PROJECT ? <span>LET'S TALK ABOUT IT</span>
            <br />*
          </p>
        </div>
      </main>
    </AnimatedComponent>
  );
}

export default Serivce;
