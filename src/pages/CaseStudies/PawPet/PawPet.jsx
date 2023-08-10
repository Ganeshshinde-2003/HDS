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
import img11 from "../../../assets/casestudies/CreamForest/Random Ice Cream Cups Mockup 1 (1).png";

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
              Paw pets is is a creative design firm with expertise in
              construction, interior design and furniture creation. hathkari
              itself means created by hand. An establish firm since 1994 rooted
              in culture and family values rebranded contemporary apporach. we
              did rebranding and website that reflected values.
            </p>
          </section>
          <hr />
          <section className={styles.text}>
            <p>Branding</p>
            <p>
              Hathkari is a creative design firm with expertise in construction,
              interior design and furniture creation. hathkari itself means
              created by hand. An establish firm since 1994 rooted in culture
              and family values rebranded contemporary apporach. we did
              rebranding and website that reflected values.
            </p>
          </section>
          <hr />
          <section className={styles.text}>
            <p>Color Palette</p>
            <p>
              Hathkari is a creative design firm with expertise in construction,
              interior design and furniture creation. hathkari itself means
              created by hand. An establish firm since 1994 rooted in culture
              and family values rebranded contemporary apporach. we did
              rebranding and website that reflected values.
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
            <img
              src={img11}
              alt="CreamForest"
            />
            <a href="/works/creamforest">
              <button className={styles.button}>View Case Study</button>
            </a>
          </div>
        </div>
      </main>
    </AnimatedComponent>
  );
}

export default PawPet;
