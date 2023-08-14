import AnimatedComponent from "../../../components/AnimatedComponent";
import styles from "./style.module.css";
import React from "react";
import img1 from "../../../assets/casestudies/CreamForest/Random Ice Cream Cups Mockup 1 (1).png";
import img2 from "../../../assets/casestudies/CreamForest/behance-03.png";
import img3 from "../../../assets/casestudies/CreamForest/behance-09.png";
import img4 from "../../../assets/casestudies/CreamForest/behance-05.png";
import img5 from "../../../assets/casestudies/CreamForest/behance-07.png";
import img6 from "../../../assets/casestudies/CreamForest/behance-06.png";
import img7 from "../../../assets/casestudies/CreamForest/reels-08 1.png";
// import img8 from "../../../assets/casestudies/pawpets/m016t0119_c_branding_mockup_27may22.png";

function CreamForest() {
  return (
    <AnimatedComponent>
      <main>
        <div className={styles.mainpart}>
          <div className={styles.headings}>
            <p>Cream Forest</p>
            <p>Organic Ice- Cream</p>
          </div>
          <div className={styles.imgcontainer}>
            <img src={img1} alt="CreamForest" />
          </div>
          <section className={styles.text}>
            <p>Overview</p>
            <p>
              Creamforest is a company that is dedicated to the production and
              sales and milk-delivered products in this case developing a more
              natural ice cream focused on new consumer and personal care
              trends. we created a brand identity and packaging for them.
            </p>
          </section>
          <br />
          <br />
          <section className={styles.text}>
            <p>Branding</p>
            <p>
              Our job consisted of creating a brand and its packaging for a
              product based an artisanal and more natural ice caring for our
              body as a container of life; this was transferred to the logo that
              consists of a very expensive and classic typeface after the
              packaging was made in the which we rainforce the concept with very
              striking flat colors with large texts, illustrations and abstract
              brush strokes in black have a powerful construct
            </p>
          </section>
          <div className={styles.imgcontainer}>
            <img src={img2} alt="CreamForest" />
          </div>
          <section className={styles.images}>
            <img src={img3} alt="CreamForest" />
          </section>
          <section className={styles.images}>
            <img src={img4} alt="CreamForest" />
          </section>
          <section className={styles.text}>
            <p>Packaging</p>
            <p>
              For the packaging we worked on abstract strokes as well as
              Illustration based artworks, according to the flavours of the ice
              cream. Keeping it artisanal and more natural look.
            </p>
          </section>
          <section className={styles.images}>
            <img src={img5} alt="CreamForest" />
          </section>
          <section className={styles.image}>
            <img src={img6} alt="CreamForest" />
            <img src={img7} alt="CreamForest" />
          </section>
          {/* <div className={styles.headings}>
            <p>PawPet</p>
          </div>
          <div className={styles.last}>
            <img
              src={img8}
              alt="CreamForest"
            />
            <a href="/works/pawpet">
              <button className={styles.button}>View Case Study</button>
            </a>
          </div> */}
        </div>
      </main>
    </AnimatedComponent>
  );
}

export default CreamForest;
