import AnimatedComponent from "../../../components/AnimatedComponent";
import styles from "./style.module.css";
import img1 from "../../../assets/images/Atmabodh.png";
import React from "react";
import img2 from "../../../assets/casestudies/Atmabodh/Artboard 1@4x-100 1 (1).png";
import img3 from "../../../assets/casestudies/Atmabodh/6140320 (1).png";
import img4 from "../../../assets/casestudies/Atmabodh/5509138.png";
import img5 from "../../../assets/casestudies/Atmabodh/232.png";
import img6 from "../../../assets/casestudies/Atmabodh/Artboard 2@4x-100 1.png";
import img7 from "../../../assets/casestudies/Atmabodh/Landing page - ATMABODH 1.png";
import img8 from "../../../assets/casestudies/Atmabodh/About atmabodh - final 1.png";
import img9 from "../../../assets/images/Culinary .jpg";
import { Link } from "react-router-dom";

function Atmabodh() {
  return (
    <AnimatedComponent>
      <main>
        <div className={styles.mainpart}>
          <div className={styles.headings}>
            <p>Atmabobh</p>
            <p>Rejoice, Rekindle, Rejuvenate</p>
          </div>
          <div className={styles.imgcontainer}>
            <img src={img1} alt="Toot" />
          </div>
          <section className={styles.text}>
            <p>Overview</p>
            <p>
              Brand Identity and website for Atmabodh is a digital detox
              retreat, who are targeting the working individuals and encouraging
              them to reduce their blue light radiation exposure. In
              collaboration with superskills.
            </p>
          </section>
          <section className={styles.text}>
            <p>Branding</p>
            <p>
              Haraay was asked to create a brand identity for this exciting new
              venture which would appeal to all the stakeholders & to the
              audience.
            </p>
          </section>
          <section className={styles.textpart}>
            <p>
              The new logotype is friendly and welcoming, using bold typography,
              rounded letterforms. The cool colour palette of royal blue and
              green mixed with soft pastels gives a clean, modern feel which
              reflects the nature and is in contrast to the busy everyday
              lifstyle. The team also created Illustrations and graphics.
            </p>
            <p>
              For the entire brand, we took a clean, and minimal approach,
              coupled with some customized typefaces. To make it more friendly &
              out there we used a more of abstract typeface through out their
              website.
            </p>
          </section>
          <section
            className={styles.images}
            style={{ margin: "0 auto", width: "70%" }}
          >
            <img src={img2} alt="Atmabodh" />
          </section>
          <section className={styles.image}>
            <img src={img3} alt="Atmabodh" />
            <img src={img4} alt="Atmabodh" />
          </section>
          <section className={styles.images}>
            <img src={img5} alt="Atmabodh" />
          </section>
          <section
            className={styles.images}
            style={{ margin: "0 auto", width: "70%" }}
          >
            <img src={img6} alt="Atmabodh" />
          </section>
          <section className={styles.text}>
            <p>Website</p>
            <p>
              With the help of illustrations and abstract typeface, we developed
              an abstract and slightly creative approach to the website design,
              with some modest, clean yet bold and eye-catching prints and
              patterns of the identity created.
            </p>
          </section>
          <section className={styles.image}>
            <img src={img7} alt="Atmabodh" />
            <img src={img8} alt="Atmabodh" />
          </section>
          <div className={styles.headings}>
            <p>Culinary</p>
            <p>A lounge bar</p>
          </div>
          <div className={styles.last}>
            <img src={img9} alt="Culinary" />
            <Link to="/works/culinary">
              <button className={styles.button}>View Case Study</button>
            </Link>
          </div>
        </div>
      </main>
    </AnimatedComponent>
  );
}

export default Atmabodh;
