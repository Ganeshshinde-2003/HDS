import AnimatedComponent from "../../../components/AnimatedComponent";
import styles from "./style.module.css";
import img1 from "../../../assets/images/Culinary .jpg";
import React from "react";
import img2 from "../../../assets/casestudies/Culinary/Screenshot 2023-08-11 at 9.49.png";
import img3 from "../../../assets/casestudies/Culinary/Screenshot 2023-08-11 at 9.49 (1).png";
import img4 from "../../../assets/casestudies/Culinary/Screenshot 2023-08-11 at 11.02 1.png";
import img5 from "../../../assets/casestudies/Culinary/Screenshot 2023-08-11 at 9.49 (2).png";
import img6 from "../../../assets/casestudies/pawpets/m016t0119_c_branding_mockup_27may22.png";

function Culinary() {
  return (
    <AnimatedComponent>
      <main>
        <div className={styles.mainpart}>
          <div className={styles.headings}>
            <p>Culinary</p>
            <p>A Lounge Bar</p>
          </div>
          <div className={styles.imgcontainer}>
            <img src={img1} alt="Culinary" />
          </div>
          <section className={styles.text}>
            <p>Overview</p>
            <p>
              Rich in heritage and abudant Culinary is a gathering place
              celebrating the reason's finst.We created a brand and website that
              reflected the luxury.
            </p>
          </section>
          <section className={styles.images}>
            <img src={img4} alt="Culinary" />
          </section>
          <section className={styles.images}>
            <img src={img2} alt="Culinary" />
          </section>
          <section className={styles.images}>
            <img src={img3} alt="Culinary" />
          </section>
          <section className={styles.images}>
            <img src={img5} alt="Culinary" />
          </section>
          <div className={styles.headings}>
            <p>PawPet</p>
          </div>
          <div className={styles.last}>
            <img
              src={img6}
              alt="PawPet"
            />
            <a href="/works/pawpet">
              <button className={styles.button}>View Case Study</button>
            </a>
          </div>
        </div>
      </main>
    </AnimatedComponent>
  );
}

export default Culinary;
