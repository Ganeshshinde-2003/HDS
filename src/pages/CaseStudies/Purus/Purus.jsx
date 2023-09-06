import styles from "./style.module.css";
import React from "react";
import AnimatedComponent from "../../../components/AnimatedComponent";
import img1 from "../../../assets/casestudies/purus/2 33.png";
import img2 from "../../../assets/casestudies/purus/Artboard 10@4x-8.png";
import img4 from "../../../assets/casestudies/purus/Artboard 8@4x-8.png";
import img5 from "../../../assets/casestudies/purus/Artboard 9@4x-8.png";
import img6 from "../../../assets/casestudies/purus/Stationery Set 02 Standard Mockup 1 new.png";
import img7 from "../../../assets/casestudies/toot/TOOT 1.png";
import img8 from "../../../assets/casestudies/purus/11 (1)-min 1.png";
import img9 from "../../../assets/casestudies/purus/12 (1)-min 1.png";
import videoFile from "../../../assets/Comp 2.MP4";

function Purus() {
  return (
    <AnimatedComponent>
      <main>
        <div className={styles.mainpart}>
          <div className={styles.headings}>
            <p>Puru’s Enterprise</p>
            <p>Shaping Spaces</p>
          </div>
          <div className={styles.imgcontainer}>
            <video src={videoFile} autoPlay controls loop playsInline>
              Your browser does not support the vedio tag.
            </video>
          </div>
        </div>
        <section className={styles.text}>
          <p>Overview</p>
          <p>
            The brand identity and website for Puru’s Enterprise, a brand that
            Strives for Excellence and to bring change by inspiring individuals,
            and fostering collaborations and to build impactful networks and
            prioritize human sustainability. By contributing personal &
            professional development Consulting & Sustainable solutions.
          </p>
        </section>
        <section className={styles.text}>
          <p>Branding</p>
          <p>
            Our job consisted of creating a strong brand identity packaging, and
            it’s website. Nature driven,The characters that we are representing
            have cell-like components which together come to build something new
            using the imperfect geometric shapes to celebrate the organic ideas
            of natural meetings. These subtle touches help the visual identity
            to create a concept of human sustainability.
          </p>
        </section>
        <section className={styles.images2}>
          <img src={img2} alt="PURUS" />
        </section>
        <section className={styles.image}>
          <img src={img4} alt="PURUS" />
          <img src={img5} alt="PURUS" />
        </section>
        <section className={styles.images}>
          <img src={img1} alt="PURUS" />
        </section>
        <section className={styles.image}>
          <img src={img8} alt="PURUS" />
          <img src={img9} alt="PURUS" />
        </section>
        <section className={styles.images}>
          <img src={img6} alt="PURUS" />
        </section>
        <div className={styles.headings}>
          <p>Toot</p>
          <p>Toothpaste for kids</p>
        </div>
        <div className={styles.last}>
          <img src={img7} alt="TOOT" />
          <a href="/works/toot">
            <button className={styles.button}>View Case Study</button>
          </a>
        </div>
      </main>
    </AnimatedComponent>
  );
}

export default Purus;
