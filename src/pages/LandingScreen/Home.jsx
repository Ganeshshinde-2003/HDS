import styles from "./style.module.css";
import AnimatedComponent from "../../components/AnimatedComponent";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"

function Home() {

    useEffect(() => {
        Aos.init({duration: 1000});
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
        <div data-aos="fade-up" className={styles.text}>
            <p>We bring <br/>life to your<br />huge ideas!</p>
        </div>
        <div data-aos="fade-up" className={styles.videopart}></div>
      </main>
    </AnimatedComponent>
  );
}

export default Home;
