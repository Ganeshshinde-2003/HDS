import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import img1 from "../../assets/casestudies/RadMedia/Artboard 1@4x-100 (1) 1.png";
import img2 from "../../assets/casestudies/purus/caed1.png";

const BrandIdentity = () => {
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
      <img
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
      <p className={styles.brandHeading}>BRAND IDENTITY</p>
      <p className={styles.brandDisc1}>
        In the marketplace, it's important for your brand to be remembered the
        way you intended it to. Your brand is the sum of the consumers
        perceptions, opinions and feelings, and that's why as a brand owner,
        branding is how to take control of your own ste and message. As one of
        the most creative branding companies in India, we work with you to
        carefully craft a compelling brand is always aligned with your vision,
        and remembered as distinct.
      </p>
      <p className={styles.brandDisc2}>
        To create a Comprehensive brand identity, I need to understand the core
        of your brand.
        <br />
        <br />
        • What is the name of your brand?
        <br />
        • What products or services do you offer?
        <br />
        • Who is your target audience?
        <br />
        • What are your brand values?
        <br />
        • What makes your brand unique?
        <br />
        • What personality do you want your brand to have?
        <br />
        • What are your brand goals?
        <br />
        <br />
        Once we have a better understanding of your brand, we start to develop a
        brand identity that includes the following elements:
      </p>
      <div className={styles.brandDisc3}>
        <p className={styles.brandDisc3Head}>Brand name and tagline: </p>
        <p className={styles.brandDisc3Disc}>
          A memorable and unique name and tagline that captures . the essence of
          your brand.
        </p>
      </div>
      <div className={styles.brandDisc3}>
        <p className={styles.brandDisc3Head}>Logo and visual identity: </p>
        <p className={styles.brandDisc3Disc}>
          A visually appealing logo and overall design aesthetic that reflects
          your brand personality and values.
        </p>
      </div>
      <div className={styles.brandDisc3}>
        <p className={styles.brandDisc3Head}>Brand voice and tone: </p>
        <p className={styles.brandDisc3Disc}>
          The way you communicate with your audience, using language that is
          consistent with your brand personality.
        </p>
      </div>
      <div className={styles.brandDisc3}>
        <p className={styles.brandDisc3Head}>Brand story: </p>
        <p className={styles.brandDisc3Disc}>
          The narrative that tells your brand's history, mission, and values
        </p>
      </div>
      <p className={styles.footerHead}>
        Want to get your brand identity done? Let’s talk about it!!
      </p>
    </div>
  );
};

export default BrandIdentity;
