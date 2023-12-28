import styles from "./style.module.css";
import AnimatedComponent from "../../components/AnimatedComponent";
import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Serene from "../../assets/casestudies/SereneSkin/bottel 15 1.png";
import Radmedia from "../../assets/casestudies/RadMedia/Duct_Tape_Mockup_ everywhere 1.png";
import Creamforest from "../../assets/casestudies/CreamForest/behance-06.png";
import Hylete from "../../assets/casestudies/Hylete/5625.png";
import videoFile from "../../assets/Comp 2.MP4";
import mainImage from "../../assets/images/homeimage.png";

function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
          <img src={mainImage} alt="mainImage" className={styles.mainImage} />
          <h1 className={styles.jj}>
            <span
              className={styles.hellospan}
              style={{ left: `${30 + scrollPosition * 0.05}%` }}
            >
              hello
            </span>
            <br />
            <span style={{ left: `${50 - scrollPosition * 0.05}%` }}>
              we_are
            </span>
            <br />
            <span
              className={styles.haraayspan}
              style={{ left: `${-20 + scrollPosition * 0.05}%` }}
            >
              Haraay!
            </span>
          </h1>
        </div>
        {/* <div data-aos="fade-up" className={styles.videopart}></div> */}
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
            <Link to="/works/hylete">
              <img src={Hylete} alt="sereneskin" />
            </Link>
            <p className={styles.head}>Hylete Sports Event</p>
            <p>Brand Identity | Packaging </p>
          </div>
          <div className={`${styles.img} ${styles.videotag}`}>
            <video src={videoFile} autoPlay controls loop playsInline>
              Your browser does not support the vedio tag.
            </video>
            <p className={styles.head}>Puru’s Enterprise</p>
            <p>Brand Identity | Packaging | Website </p>
          </div>
        </section>
        <section
          data-aos="fase-up"
          className={`${styles.section} ${styles.section2}`}
        >
          <div className={styles.img}>
            <Link to="/works/sereneskin">
              <img src={Serene} alt="radmedia" />
            </Link>
            <p className={styles.head}>Serene Skin</p>
            <p>Brand Identity | Brand Strategy </p>
          </div>
          <div className={styles.img}>
            <Link to="/works/radmedia">
              <img src={Radmedia} alt="creamforest" />
            </Link>
            <p className={styles.head}>Rad Media</p>
            <p>Brand Identity | Brand Strategy </p>
          </div>
        </section>
        <section data-aos="fase-up" className={styles.section3}>
          <div className={styles.singleimg}>
            <Link to="/works/creamforest">
              <img src={Creamforest} alt="athmabodh" />
            </Link>
            <p className={styles.head}>Cream Forest</p>
            <p>Brand Identity | Packaging </p>
          </div>
          <Link to="/works">
            <button className={styles.button}>DISCOVER ALL OUR PROJECTS</button>
          </Link>
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
            <br /> PROJECT ?{" "}
            <Link to="/contactus">
              <span>LET'S TALK ABOUT IT</span>
            </Link>
            <br />*
          </p>
        </div>
      </main>
    </AnimatedComponent>
  );
}

export default Home;
