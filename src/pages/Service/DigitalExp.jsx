import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
// import img1 from "../../assets/casestudies/RadMedia/Artboard 1@4x-100 (1) 1.png";
// import img2 from "../../assets/casestudies/purus/caed1.png";
// import img3 from "../../assets/casestudies/Hylete/10-1@3x.jpg";
// import img4 from "../../assets/casestudies/CreamForest/4-1@3x.jpg";
import { useNavigate } from "react-router-dom";

const DigitalExp = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={styles.brandContainer}>
      {/* <img
        src={img1}
        alt="RADMEDIA"
        className={styles.brandimg1}
        style={{ top: `${10 - scrollPosition * 0.05}%`, left: "2%" }}
      />
      <img
        src={img2}
        alt="PURUS"
        className={styles.brandimg2}
        style={{ top: `${50 - scrollPosition * 0.05}%`, right: "2%" }}
      />
      <img
        src={img3}
        alt="PURUS"
        className={styles.brandimg2}
        style={{ top: `${70 - scrollPosition * 0.05}%`, left: "20%" }}
      />
      <img
        src={img4}
        alt="PURUS"
        className={styles.brandimg2}
        style={{ top: `${90 - scrollPosition * 0.05}%`, right: "20%" }}
      /> */}
      <p className={styles.brandHeading}>Digital Experience</p>
      <p className={styles.footerHead}> More Than Just Screens and Buttons</p>
      <p className={styles.brandDisc1}>
        The digital experience encompasses every interaction a user has with a
        brand or product through digital channels. This includes websites,
        mobile apps, social media, online advertising, and even customer service
        interactions. In today's increasingly digital world, It is more
        important than ever. A good can build brand loyalty, boost sales, and
        create positive word-of-mouth. A bad can frustrate customers, damage
        brand reputation, and lead to lost business.
      </p>
      <p className={styles.brandDisc2}>
        Once we have a better understanding of your brand, we start to develop a
        brand identity that includes the following elements:
      </p>
      <div className={styles.brandDisc3}>
        <div className={styles.brancdpoints}>
          <span>Usability: </span>
          <p>
            The website or app should be easy to navigate and use, even for
            users who are not tech-savvy.
          </p>
        </div>
      </div>
      <div className={styles.brandDisc3}>
        <div className={styles.brancdpoints}>
          <span>Relevance: </span>
          <p>
            The content and functionality of the DX should be relevant to the
            user's needs and interests.
          </p>
        </div>
      </div>
      <div className={styles.brandDisc3}>
        <div className={styles.brancdpoints}>
          <span>Personalization: </span>
          <p>The DX should be personalized to the individual user.</p>
        </div>
      </div>
      <div className={styles.brandDisc3}>
        <div className={styles.brancdpoints}>
          <span>Emotion: </span>
          <p>The DX should evoke positive emotions in the user.</p>
        </div>
      </div>
      <div className={styles.brandDisc3}>
        <div className={styles.brancdpoints}>
          <span>Brand story: </span>
          <p>
            The narrative that tells your brand's history, mission, and values
          </p>
        </div>
      </div>
      <p className={styles.footerHead}>
        Want to get your website done? Let’s talk about it!!
      </p>
    </div>
  );
};

export default DigitalExp;
