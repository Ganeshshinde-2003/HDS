import styles from "./style.module.css";
import React from "react";
import AnimatedComponent from "../../../components/AnimatedComponent";
import img2 from "../../../assets/casestudies/purus/Artboard 10@4x-8.png";
import img4 from "../../../assets/casestudies/purus/Artboard 8@4x-8.png";
import img5 from "../../../assets/casestudies/purus/Artboard 9@4x-8.png";
import img7 from "../../../assets/casestudies/toot/TOOT 1.png";
import img10 from "../../../assets/casestudies/purus/caed1.png";
import img11 from "../../../assets/casestudies/purus/Artboard 9@4x-100.png";
import img12 from "../../../assets/casestudies/purus/Artboard 4@4x-100.png";
import img13 from "../../../assets/casestudies/purus/Artboard 10@4x-100.png";
import img14 from "../../../assets/casestudies/purus/op.png";
import img15 from "../../../assets/casestudies/purus/Artboard 6@4x-100.png";
import img16 from "../../../assets/casestudies/purus/19 1.png";
import si1 from "../../../assets/casestudies/purus/9 4.png";
import si2 from "../../../assets/casestudies/purus/14 1.png";
import si3 from "../../../assets/casestudies/purus/11 370.png";
import si4 from "../../../assets/casestudies/purus/12 (1) 1.png";
import si5 from "../../../assets/casestudies/purus/17 1.png";
import si6 from "../../../assets/casestudies/purus/puru 2 (1) 1.png";
import videoFile from "../../../assets/Comp 2.MP4";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function Purus() {
  return (
    <AnimatedComponent>
      <main>
        <div className={styles.mainpart}>
          <div className={styles.headings}>
            <p>Puru’s Enterprise</p>
            <p>{`Inspiring for Innovation \u00A0`}
            <a href="https://www.purusenterprises.in/" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faLink} style={{color:"black"}} /></a></p>
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
            have imperfect geometric shapes to celebrate the organic ideas of
            natural meetings. These subtle touches help the visual identity to
            create a concept of human sustainability. The logo was
            professionally designed tom meet the company's needs and, most
            importantly, to appeal to its target audience, embodying the
            concepts of luxury and sophistication intrinsic to the brand.
          </p>
        </section>
        <section className={styles.textpart}>
          <p>
            When designing the logo, the square shape was taken into account for
            several reasons. It symbolizes four pillars of brand and
            sustainability.
          </p>
          <p>
            The logo's design was inspired by four pillars of the brand. The
            golden ratio was applied to the logo to imbue it with the sense of
            balance and precision inherent in the brand's work.
          </p>
        </section>
        <section className={styles.images2}>
          <img src={img2} alt="PURUS" />
        </section>
        <section className={styles.images}>
          <img src={img10} alt="PURUS" />
        </section>
        <section className={styles.image}>
          <img src={img4} alt="PURUS" />
          <img src={img5} alt="PURUS" />
        </section>
        <section className={styles.images}>
          <img src={img11} alt="PURUS" />
        </section>
        <section className={styles.images}>
          <img src={img12} alt="PURUS" />
        </section>
        <section className={styles.image}>
          <img src={img13} alt="PURUS" />
          <img src={img14} alt="PURUS" />
        </section>
        <section className={styles.images}>
          <img src={img15} alt="PURUS" />
        </section>
        <div className={styles.faqsection}>
          <div className={`${styles.faqiamge} ${styles.text}`}>
            <p>Packaging</p>
            <p>
              The Packaging design for puru’s is inspired by playfullness with
              variations for the different categories of sustainable products.
              With the help of Cinema 4D, each packaging has a distinct thought
              process behind it.
              <br />
              <br />
              The designs of the packaging represents the products inside them.
              from minimal formals for the adults to scribble art for kids, we
              value and understand the needs
              <br />
              <br />
              The design theme is purely based on the idea to make this
              packaging more engaging for kids. The colour pencil’s on the
              packaging represents the colour pencil’s inside the packaging.
              here, the back of this packaging is a cutout of an oragami for
              kids to colour, cut and play with it.
            </p>
          </div>
          <div className={styles.faqs}>
            <div className={styles.faq1}>
              <img src={si1} alt="PURUS" />
            </div>
            <div className={styles.faq1}>
              <img src={si2} alt="PURUS" />
            </div>
            <div className={styles.faq1}>
              <img src={si3} alt="PURUS" />
            </div>
            <div className={styles.faq1}>
              <img src={si4} alt="PURUS" />
            </div>
            <div className={styles.faq1}>
              <img src={si5} alt="PURUS" />
            </div>
            <div className={styles.faq1}>
              <img src={si6} alt="PURUS" />
            </div>
          </div>
        </div>
        <section className={styles.images}>
          <img src={img16} alt="PURUS" />
        </section>
        <div className={styles.headings}>
          <p>Toot</p>
          <p>Toothpaste for kids</p>
        </div>
        <div className={styles.last}>
          <img src={img7} alt="TOOT" />
          <Link to="/works/toot">
            <button className={styles.button}>View Case Study</button>
          </Link>
        </div>
      </main>
    </AnimatedComponent>
  );
}

export default Purus;
