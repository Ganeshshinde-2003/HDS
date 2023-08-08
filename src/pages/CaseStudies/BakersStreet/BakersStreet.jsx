import styles from "./style.module.css";
import img1 from "../../../assets/casestudies/bakerstreet/jocelyn-morales-qqIj5pV48-s-unsplash (1) 1.png";
import img2 from "../../../assets/casestudies/bakerstreet/21.png";
import img3 from "../../../assets/casestudies/bakerstreet/GIF 1.png";
import img4 from "../../../assets/casestudies/bakerstreet/Artboard 1-100 4.png";
import img5 from "../../../assets/casestudies/bakerstreet/Artboard 9-100.jpg";
import img6 from "../../../assets/casestudies/bakerstreet/Artboard 10-100.jpg";
import img7 from "../../../assets/casestudies/bakerstreet/Artboard 12-100.jpg";
import img8 from "../../../assets/casestudies/bakerstreet/Artboard 1 4.png";
import img9 from "../../../assets/casestudies/bakerstreet/Artboard 6-100.jpg";
import img10 from "../../../assets/casestudies/bakerstreet/Artboard 10-100.jpg";
import img11 from "../../../assets/casestudies/bakerstreet/Artboard 25-100.jpg";
import img12 from "../../../assets/casestudies/bakerstreet/RENDER 2.jpg";
import img14 from "../../../assets/casestudies/bakerstreet/Artboard 23-100.jpg";
import img15 from "../../../assets/casestudies/bakerstreet/Artboard 1@4x-100 (1) 2.png";
import videoFile from "../../../assets/casestudies/bakerstreet/Screen Recording 2023-07-04 at 10.48.08 AM.mov";

function BakersStreet() {
  return (
    <main>
      <div className={styles.mainpart}>
        <div className={styles.headings}>
          <p>Baker’s Street</p>
          <p>Bakery & Cafe</p>
        </div>
        <div className={styles.imgcontainer}>
          <img src={img1} alt="Serene Skin" />
          <img src={img2} alt="logo" />
        </div>
        <section className={styles.text}>
          <p>Overview</p>
          <p>
            Baker’s Street is the only one stop bakery point which provides
            heavenly experience of their premium desserts to our young and
            social media savvy audience. It is designed in an elegant and
            magnificent way to create a memorable experience for everyone.
          </p>
        </section>
        <hr />
        <section className={styles.text}>
          <p>Branding</p>
          <p>
            Baker's Street is a high-end brand. Since their menu is inspired by
            various heritage locations throughout the world, we were tasked with
            producing branding and packaging designs for the same.
            <br /> <br />
            For the entire brand, we took a friendly, clean, and minimal
            approach, coupled with some customized typefaces that would relate
            to the bite mark, which resembles a cookie bite, and the bits and
            pieces of crumbs that would tie to the whole brand's aesthetics and
            audience.
          </p>
        </section>
        <hr />
        <section className={styles.text}>
          <p>Color Palette</p>
          <p>
            When it comes to the Bakery industry, the color palette chosen is
            distinctive because these colors are not very commonly used.
            <br /> <br />
            The color palette is kept bold and fun-loving while remaining
            welcoming and disruptive in its own sense.
          </p>
        </section>
        <section className={styles.images}>
          <img src={img3} alt="bakerstreet" />
        </section>
        <section className={styles.images}>
          <img
            src={img4}
            alt="bakerstreet"
            style={{ margin: "0 auto", width: "70%" }}
          />
        </section>
        <section className={styles.images}>
          <img src={img5} alt="bakerstreet" />
        </section>
        <section className={styles.images}>
          <img src={img6} alt="bakerstreet" />
        </section>
        <section className={styles.images}>
          <img src={img7} alt="bakerstreet" />
        </section>
        <section className={styles.images}>
          <img src={img8} alt="bakerstreet" />
        </section>
        <section className={styles.image}>
          <img src={img9} alt="bakerstreet" />
          <img src={img10} alt="bakerstreet" />
        </section>
        <section className={styles.images}>
          <img src={img11} alt="bakerstreet" />
        </section>
        <section className={styles.text}>
          <p>Packaging</p>
          <p>
            With the help of illustrations and a mascot, we developed an
            abstract and slightly creative approach to the packaging design,
            with some modest yet bold and eye-catching prints and patterns of
            the identity created.
          </p>
        </section>
        <hr />
        <section className={styles.text}>
          <p>Mascot</p>
          <p>
            A mascot has been created to act as a visual representation of the
            brand, allowing its customers to remember and recognize the bakery
            amid the competitors.
          </p>
        </section>
        <section className={styles.image}>
          <img src={img12} alt="bakerstreet" />
          <video
            className={styles.video}
            src={videoFile}
            autoPlay
            controls
            loop
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </section>
        <section className={styles.images}>
          <img src={img14} alt="bakerstreet" />
        </section>
        <div className={styles.headings}>
          <p>RAD Media</p>
          <p>Media House</p>
        </div>
        <div className={styles.last}>
          <img src={img15} alt="RAD Media" />
          <a href="/works/radmedia">
            <button className={styles.button}>View Case Study</button>
          </a>
        </div>
      </div>
    </main>
  );
}

export default BakersStreet;
