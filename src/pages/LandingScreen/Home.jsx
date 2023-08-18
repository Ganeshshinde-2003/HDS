import styles from "./style.module.css";
import AnimatedComponent from "../../components/AnimatedComponent";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Serene from "../../assets/casestudies/SereneSkin/bottel 15 1.png";
import purus from "../../assets/casestudies/purus/2 33.png";
import Radmedia from "../../assets/casestudies/RadMedia/Duct_Tape_Mockup_ everywhere 1.png";
import Creamforest from "../../assets/casestudies/CreamForest/Random Ice Cream Cups Mockup 1 (1).png";
import Atmabodh from "../../assets/casestudies/Atmabodh/18728358 1.png";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  useEffect(() => {
    const texts = ["Recent", "work"];
    const stickySection = document.querySelector(`.${styles.sticky}`);
    const scrollSection = stickySection.querySelector(
      `.${styles.scrollsection}`
    );

    let textToShow = texts.join(" ");
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

    const handleHome = () => {
      const offset = stickySection.parentElement.offsetTop;
      let percentage = ((window.scrollY - offset) / window.innerHeight) * 100;
      percentage = percentage < 0 ? 0 : percentage > 100 ? 100 : percentage;
      scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
    };

    window.addEventListener("scroll", handleHome);

    return () => {
      window.removeEventListener("scroll", handleHome);
    };
  }, []);

  useEffect(() => {
    const texts = ["EXPER", "TIES"];
    const stickySection2 = document.querySelector(`.${styles.sticky2}`);
    const scrollSection2 = stickySection2.querySelector(
      `.${styles.scrollsection2}`
    );

    let textToShow = texts.join("");
    const existingTextElement = scrollSection2.querySelector(
      `.${styles.dynamicP2}`
    );
    if (existingTextElement) {
      existingTextElement.innerText = textToShow;
    } else {
      let tstCSS = document.createElement("p");
      tstCSS.innerText = textToShow;
      tstCSS.className = styles.dynamicP2;
      scrollSection2.appendChild(tstCSS);
    }

    const handleHome2 = () => {
      const offset = stickySection2.parentElement.offsetTop;
      let percentage = ((window.scrollY - offset) / window.innerHeight) * 100;
      percentage = percentage < 0 ? 0 : percentage > 100 ? 100 : percentage;
      scrollSection2.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
    };

    window.addEventListener("scroll", handleHome2);

    return () => {
      window.removeEventListener("scroll", handleHome2);
    };
  }, []);

  return (
    <AnimatedComponent>
      <main className={styles.main}>
        <div data-aos="fade-up" className={styles.headings}>
          <h1 className={styles.jj}>
            <span>hello</span>
            <span>we are</span>
            <span>Haraay!</span>
          </h1>
          <h1 className={styles.jj}>
            <span>hello</span>
            <span>we are</span>
            <span>Haraay!</span>
          </h1>
        </div>
        <div data-aos="fade-up" className={styles.videopart}></div>
        <div data-aos="fade-up" className={styles.text}>
          <p>
            We bring <br />
            life to your
            <br />
            huge ideas!
            <br />*
          </p>
        </div>
        <div data-aos="fade-up" className={styles.stickyparent}>
          <div className={styles.sticky}>
            <div className={styles.scrollsection}></div>
          </div>
        </div>
        <section data-aos="fase-up" className={styles.section}>
          <div className={styles.img}>
            <img src={Serene} alt="sereneskin" />
            <p className={styles.head}>Serene Skin</p>
            <p>Brand Identity | Packaging </p>
          </div>
          <div className={styles.img}>
            <img src={purus} alt="purus" />
            <p className={styles.head}>Puru’s Enterprise</p>
            <p>Brand Identity | Packaging | Website </p>
          </div>
        </section>
        <section
          data-aos="fase-up"
          className={`${styles.section} ${styles.section2}`}
        >
          <div className={styles.img}>
            <img src={Radmedia} alt="radmedia" />
            <p className={styles.head}>Rad Media</p>
            <p>Brand Identity | Brand Strategy </p>
          </div>
          <div className={styles.img}>
            <img src={Creamforest} alt="creamforest" />
            <p className={styles.head}>Cream Forest</p>
            <p>Brand Identity | Packaging </p>
          </div>
        </section>
        <section data-aos="fase-up" className={styles.section3}>
          <div className={styles.singleimg}>
            <img src={Atmabodh} alt="athmabodh" />
            <p className={styles.head}>Atmabodh</p>
            <p>Brand Identity | Packaging </p>
          </div>
          <a href="/works">
            <button className={styles.button}>DISCOVER ALL OUR PROJECTS</button>
          </a>
        </section>
        <div data-aos="fade-up" className={styles.stickyparent2}>
          <div className={styles.sticky2}>
            <div className={styles.scrollsection2}></div>
          </div>
        </div>
        <section className={styles.identity}>
          <div>
            <p className={styles.head}>STRATEGY & IDEAS</p>
            <p>Positioning</p>
            <p>Brand Strategy</p>
            <p>Brand Platform</p>
            <p>Digital strategy</p>
            <p>Social Strategy</p>
            <p>Content Marketing</p>
          </div>
          <div>
            <p className={styles.head}>BRAND IDENTITY</p>
            <p>Logo</p>
            <p>Graphic identity</p>
            <p>graphical charter</p>
            <p>Editorial charter</p>
            <p>Content creation</p>
            <p>Social media guidelines</p>
          </div>
          <div>
            <p className={styles.head}>DIGITAL EXPERIENCE</p>
            <p>UI / UX design</p>
            <p>Audit and UX design</p>
            <p>Showcase site</p>
            <p>E-commerce site</p>
            <p>Web application</p>
            <p>Web development</p>
          </div>
        </section>
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

export default Home;
