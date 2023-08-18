import styles from "./style.module.css";
import AnimatedComponent from "../../components/AnimatedComponent";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"

function Home() {

    useEffect(() => {
        Aos.init({duration: 1500});
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
            <p>We bring <br/>life to your<br />huge ideas!<br />*</p>
        </div>
        <div data-aos="fade-up" className={styles.stickyparent}>
          <div className={styles.sticky}>
            <div className={styles.scrollsection}></div>
          </div>
        </div>
      </main>
    </AnimatedComponent>
  );
}

export default Home;
