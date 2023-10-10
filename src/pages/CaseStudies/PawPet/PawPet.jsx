import React from "react";
import styles from "./style.module.css";
import AnimatedComponent from "../../../components/AnimatedComponent";
import img1 from "../../../assets/casestudies/pawpets/m016t0119_c_branding_mockup_27may22.png";
import img2 from "../../../assets/casestudies/pawpets/10853-min.jpg";
import img3 from "../../../assets/casestudies/pawpets/57716-Recovered 1.png";
import img4 from "../../../assets/casestudies/pawpets/Mix_of_round_sitckers_collection_mockup.png";
import img5 from "../../../assets/casestudies/pawpets/11369-min.jpg";
import img6 from "../../../assets/casestudies/pawpets/Artboard 1_3.png";
import img7 from "../../../assets/casestudies/pawpets/Artboard 1_4.png";
import img8 from "../../../assets/casestudies/pawpets/Artboard 1.png";
import img9 from "../../../assets/casestudies/pawpets/Open-Magazine-Mockup-min.jpg";
import img10 from "../../../assets/casestudies/pawpets/Free A4 Magazine Mockup-min.jpg";
import img11 from "../../../assets/casestudies/thestone/31_May_09 (1)-min-min 1.png";
import { Link } from "react-router-dom";

function PawPet() {
  return (
    <AnimatedComponent>
      <main>
        <div className={styles.mainpart}>
          <div className={styles.headingtext}>
            <p>Paw Pets</p>
          </div>
          <img src={img1} alt="PawPet" />
          <section className={styles.text}>
            <p>Overview</p>
            <p>
              A friendly brand identity introduces the world’s most incredible
              pets. Paw pets is is a full-service Pet Solutions Partner with a
              proven track record. From insights, to intermediate and mega
              trendset Treats/Snacks/Supplements of the highest quality and
              palatability. We offer fast, efficient, and successful solutions
              to ensure you meet your goals.
            </p>
          </section>
          <section className={styles.text}>
            <p>Branding</p>
            <p>
              Haraay developed a brand identity with a playful look and feel.
              Paw pets is playful personality is expressed in the brand
              identity, which is warm, outgoing and modern. Haraay developed
              brand identity, positioning, messaging and packaging as well as
              magzine for the new product that highlights its incredible
              products and innovative technology.
              <br />
              <br />
              Paw Pets playful personality is expressed in the graphic identity,
              which is warm, outgoing and modern. The pawpet wordmark is set in
              customized letterforms based on the friendly, with some edgy tone
              to it. The simple illustrations are as evocative as photographs of
              the actual comforter and help create a world around the product.
            </p>
          </section>
          <section className={styles.images}>
            <img src={img2} alt="PawPet" />
            <img src={img3} alt="PawPet" />
          </section>
          <img className={styles.imgpart} src={img4} alt="PawPet" />
          <section className={styles.text}>
            <p>Website</p>
          </section>
          <img className={styles.imgpart} src={img5} alt="PawPet" />
          <section className={`${styles.images} ${styles.threeimages}`}>
            <img src={img6} alt="PawPet" />
            <img src={img7} alt="PawPet" />
            <img src={img8} alt="PawPet" />
          </section>
          <section className={styles.images}>
            <img src={img9} alt="PawPet" />
            <img src={img10} alt="PawPet" />
          </section>
          <div className={styles.headingtext}>
            <p>Cream Forest</p>
            <p>Organic Ice- Cream</p>
          </div>
          <div className={styles.last}>
            <img src={img11} alt="TheStone" />
            <Link to="/works/thestone">
              <button className={styles.button}>View Case Study</button>
            </Link>
          </div>
        </div>
      </main>
    </AnimatedComponent>
  );
}

export default PawPet;
