import AnimatedComponent from "../../../components/AnimatedComponent";
import styles from "./style.module.css";
import React from "react";
import img1 from "../../../assets/casestudies/thestone/31_May_09 (1)-min-min 1.png";
import img2 from "../../../assets/casestudies/thestone/Artboard 16@4x-100-min.jpg";
import img3 from "../../../assets/casestudies/thestone/Artboard 8@4x-100-min.jpg";
import img4 from "../../../assets/casestudies/thestone/Artboard 15@4x-100-min 1.png";
import img5 from "../../../assets/casestudies/thestone/Stationary_Mockup_005-min.jpg";
import img6 from "../../../assets/casestudies/thestone/Scene 14 (1) 1.png";
import img7 from "../../../assets/casestudies/thestone/Slice 3 1.png";
import img8 from "../../../assets/casestudies/thestone/Slice 1 1.png";
import img9 from "../../../assets/casestudies/thestone/Slice (2) 1.png";
import img10 from "../../../assets/casestudies/toot/TOOT 1.png";
import { Link } from "react-router-dom";

function Stone() {
  return (
    <AnimatedComponent>
      <main>
        <div className={styles.mainpart}>
          <div className={styles.headings}>
            <p>The Stone Construction</p>
            <p>Shaping Spaces</p>
          </div>
          <div className={styles.imgcontainer}>
            <img src={img1} alt="TheStone" />
          </div>
          <section className={styles.text}>
            <p>Overview</p>
            <p>
              The brand identity and website for the stone construction. The
              stone is a construction based company that builds new properties
              by creating value in new ways. Our desire to work closely with
              those who share the same vision and values is why many of our
              clients have a multiple project history
            </p>
          </section>
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
          <section className={styles.images}>
            <img src={img2} alt="TheStone" />
          </section>
          <section className={styles.image}>
            <img className={styles.img3} src={img3} alt="TheStone" />
            <img src={img4} alt="TheStone" />
          </section>
          <section className={styles.images}>
            <img src={img5} alt="TheStone" />
          </section>
          <section className={styles.text}>
            <p>Website</p>
            <p>
              Hathkari is a creative design firm with expertise in construction,
              interior design and furniture creation. hathkari itself means
              created by hand. An establish firm since 1994 rooted in culture
              and family values rebranded contemporary apporach. we did
              rebranding and website that reflected values.
            </p>
          </section>
          <section className={styles.images}>
            <img src={img6} alt="TheStone" />
          </section>
          <section className={styles.image}>
            <img src={img7}  alt="TheStone" />
            <img src={img8} className={styles.img8} alt="TheStone" />
          </section>
          <section className={styles.images}>
            <img src={img9} alt="TheStone" />
          </section>
          <div className={styles.headings}>
            <p>Toot</p>
            <p>Toothpaste for kids</p>
          </div>
          <div className={styles.last}>
            <img
              src={img10}
              alt="Toot"
            />
            <Link to="/works/toot">
              <button className={styles.button}>View Case Study</button>
            </Link>
          </div>
        </div>
      </main>
    </AnimatedComponent>
  );
}

export default Stone;
