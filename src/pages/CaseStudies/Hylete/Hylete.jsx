import React from "react";
import styles from "./style.module.css";
import AnimatedComponent from "../../../components/AnimatedComponent";
import img1 from "../../../assets/casestudies/Hylete/5625.png";
import img2 from "../../../assets/casestudies/Hylete/Artboard 1@4x-100 3.png";
import img3 from "../../../assets/casestudies/Hylete/6.png";
import img4 from "../../../assets/casestudies/Hylete/2.png";
import img5 from "../../../assets/casestudies/Hylete/AD-BuisinessCards.png";
import img6 from "../../../assets/casestudies/Hylete/8.png";
import img7 from "../../../assets/casestudies/Hylete/Urban_Poster_Mockup.jpg";
import img8 from "../../../assets/casestudies/Hylete/ID Card PSD Mockup.jpg";
import img9 from "../../../assets/casestudies/Hylete/flag.png";
import img10 from "../../../assets/casestudies/Hylete/Free_Ticket_Mockup_2.jpg";
import img11 from "../../../assets/casestudies/Hylete/poster Mockups.jpg";
import img12 from "../../../assets/casestudies/Hylete/Subway Poster Mockup.jpg";
import img13 from "../../../assets/casestudies/Hylete/Mockup.jpg";
import img14 from "../../../assets/casestudies/Hylete/81690.jpg";

const Hylete = () => {
  return (
    <AnimatedComponent>
      <main>
        <div className={styles.mainpart}>
          <div className={styles.headings}>
            <p>Hylete Sports Event</p>
            <p>Innovation for Inspiration</p>
          </div>
          <div className={styles.imgcontainer}>
            <img src={img1} alt="RadMedia" />
          </div>
        </div>
        <section className={styles.text}>
          <p>Overview</p>
          <p>
            The brand identity hylete is a Brand of professional sport Event
            Management. At hylete, they specialise in Event Planning, hylete
            focuses on organising and Managing sports events, such as
            compititions, games, team events, team sports and much more. hylete
            is Brand that Promotes, supports and Encourages individuals to Play
            sports. hylete has widely and strongly established itself in
            different fields of sports like cricket, football, tennis,
            professional cycling and more. At hylete they encourage young talent
            because we belleve in equality. And with hylete you have the power
            to change your story!
          </p>
        </section>
        <section className={styles.text}>
          <p>Branding</p>
          <p>
            Our job consisted of creating a strong brand identity and branding.
            <br />
            <br />
            The logo's design was inspired by four pillars of the brand. The
            golden ratio was applied to the logo to imbue it with the sense of
            balance and precision inherent in the brand's work.
          </p>
        </section>
        <section className={styles.images}>
          <img src={img2} alt="PURUS" />
        </section>
        <section className={styles.image}>
          <img src={img3} alt="PURUS" />
          <img src={img4} alt="PURUS" />
        </section>
        <section className={styles.images}>
          <img src={img5} alt="PURUS" />
        </section>
        <section className={styles.images}>
          <img src={img6} alt="PURUS" />
        </section>
        <section className={styles.rowcolimage}>
          <div className={styles.colimg}>
            <img src={img7} alt="img7" />
            <img src={img8} alt="img8" />
          </div>
          <div className={styles.colimg}>
            <img src={img9} alt="img9" />
          </div>
        </section>
        <section className={styles.images}>
          <img src={img10} alt="PURUS" />
        </section>
        <section className={styles.image}>
          <img src={img11} alt="PURUS" />
          <img src={img12} alt="PURUS" />
        </section>
        <section className={styles.images}>
          <img src={img13} alt="PURUS" />
        </section>
        <section className={styles.images}>
          <img src={img14} alt="PURUS" />
        </section>
        {/* <div className={styles.headings}>
          <p>Toot</p>
          <p>Toothpaste for kids</p>
        </div>
        <div className={styles.last}>
          <img src={img7} alt="TOOT" />
          <Link to="/works/toot">
            <button className={styles.button}>View Case Study</button>
          </Link>
        </div> */}
      </main>
    </AnimatedComponent>
  );
};

export default Hylete;
