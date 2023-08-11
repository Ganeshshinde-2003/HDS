import AnimatedComponent from "../../../components/AnimatedComponent";
import styles from "./style.module.css";
import React from "react";
import img1 from "../../../assets/casestudies/hathkari/93 2.png";
import img2 from "../../../assets/casestudies/hathkari/m012t0153_stationary_mockup_22may22_b (2) 1.png";
import img3 from "../../../assets/casestudies/hathkari/m012t0165_e_stationary_mockup_31may22 (2) 1.png";
import img4 from "../../../assets/casestudies/hathkari/Artboard 5@4x (1) 1.png";
import img5 from "../../../assets/casestudies/hathkari/Golden_Logo_on_Black_Textured_Paper_Mockup 1.png";
import img6 from "../../../assets/casestudies/hathkari/93 2.png";
import img7 from "../../../assets/casestudies/hathkari/rm405-da01-04-mockup (1) 1.png";
import img8 from "../../../assets/casestudies/hathkari/Random Ice Cream Cups Mockup 1.png";

function Hathkari() {
  return (
    <AnimatedComponent>
      <main>
        <div className={styles.mainpart}>
          <div className={styles.headings}>
            <p>Toot</p>
            <p>Toothpaste for kids</p>
          </div>
          <div className={styles.imgcontainer}>
            <img src={img1} alt="Hathkari" />
          </div>
          <section className={styles.text}>
            <p>Overview</p>
            <p>
              Toot is a kids toothpaste for kids, with flavours like Orange,
              Cherry, Lemon and Blue Raspberry with all the natural ingredients
              to ensure your kids has the brightest and healthest smile
            </p>
          </section>
          <section className={styles.text}>
            <p>Branding</p>
          </section>
          <section className={styles.image}>
            <img src={img2} alt="Hathkari" />
            <img src={img3} alt="Hathkari" />
          </section>
          <section className={styles.images}>
            <img
              src={img4}
              alt="RadMedia"
            />
          </section>
          <section className={styles.image}>
            <img src={img5} alt="Hathkari" />
            <img src={img6} alt="Hathkari" />
          </section>
          <section className={styles.text}>
            <p>Website</p>
          </section>
          <section className={styles.images}>
            <img
              src={img7}
              alt="RadMedia"
            />
          </section>
          <hr />
          <div className={styles.headings}>
            <p>Cream Forest</p>
            <p>Organic Ice- Cream</p>
          </div>
          <div className={styles.last}>
            <img src={img8} alt="CreamForest" className={styles.lastimg} />
            <a href="/works/creamforest">
              <button className={styles.button}>View Case Study</button>
            </a>
          </div>
        </div>
      </main>
    </AnimatedComponent>
  );
}

export default Hathkari;
