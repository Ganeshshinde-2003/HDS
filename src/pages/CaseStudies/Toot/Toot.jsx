import AnimatedComponent from "../../../components/AnimatedComponent";
import styles from "./style.module.css";
import React from "react";
import img1 from "../../../assets/casestudies/toot/TOOT 1.png";
import img2 from "../../../assets/casestudies/toot/Artboard 2@4x 1.png";
import img3 from "../../../assets/casestudies/toot/Artboard 13@4x 1.png";
import img4 from "../../../assets/casestudies/toot/Artboard 10@4x 1.png";
import img5 from "../../../assets/casestudies/toot/Artboard 12@4x 1.png";
import img6 from "../../../assets/casestudies/toot/Artboard 1@4x (1) 1.png";
import img7 from "../../../assets/casestudies/toot/93 1.png";
import { Link } from "react-router-dom";

function Toot() {
  return (
    <AnimatedComponent>
      <main>
        <div className={styles.mainpart}>
          <div className={styles.headings}>
            <p>Toot</p>
            <p>Toothpaste for kids</p>
          </div>
          <div className={styles.imgcontainer}>
            <img src={img1} alt="Toot" />
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
            <p>
              RAD media’s identity is an abstract shape with each line
              representing a part of photography and videography. The whole
              aesthetic of the brand is simple and clean yet pop-py.
            </p>
          </section>
          <section className={styles.text}>
            <p>Color Palette</p>
            <p>
              The logo has 3 layers of rectangular shaped letters, each
              representing a part of videography. Starting up from the base, it
              starts with the groundwork and laying in the foundation to any
              good output, a good composition is necessary and all of these
              elements are visible in the logo based on its placement.
            </p>
          </section>
          <section className={styles.images}>
            <img src={img2} alt="Toot" />
          </section>
          <section className={styles.images}>
            <img src={img3} alt="Toot" />
          </section>
          <section className={styles.images}>
            <img src={img4} alt="Toot" />
          </section>
          <section className={styles.images}>
            <img src={img5} alt="Toot" />
          </section>
          <section className={styles.images}>
            <img src={img6} alt="Toot" />
          </section>
          <hr />
          <div className={styles.headings}>
            <p>Hathkari & co</p>
            <p>Design Create Deliver</p>
          </div>
          <div className={styles.last}>
            <img src={img7} alt="RAD Media" className={styles.lastimg} />
            <Link to="/works/hathkari">
              <button className={styles.button}>View Case Study</button>
            </Link>
          </div>
        </div>
      </main>
    </AnimatedComponent>
  );
}

export default Toot;
