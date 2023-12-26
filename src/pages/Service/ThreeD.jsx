import styles from "./style.module.css";
import vid1 from "../../assets/0001-0260.mp4";
import React, { useEffect, useState } from "react";
import vid2 from "../../assets/0001-0290 (1).mp4";
import vid3 from "../../assets/0001-0340 (1).mp4";
import vid4 from "../../assets/0001-0528 (2).mp4";
import { useNavigate } from "react-router-dom";

const ThreeD = () => {
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
      /> */}
      <video
        src={vid1}
        autoPlay
        controls
        loop
        playsInline
        className={styles.brandvid}
        style={{ top: `${10 - scrollPosition * 0.05}%`, left: "2%" }}
      >
        Your browser does not support the vedio tag.
      </video>
      <video
        src={vid2}
        autoPlay
        controls
        loop
        playsInline
        className={styles.brandvid}
        style={{ top: `${50 - scrollPosition * 0.05}%`, right: "2%" }}
      >
        Your browser does not support the vedio tag.
      </video>
      <video
        src={vid3}
        autoPlay
        controls
        loop
        playsInline
        className={styles.brandvid}
        style={{ top: `${70 - scrollPosition * 0.05}%`, left: "20%" }}
      >
        Your browser does not support the vedio tag.
      </video>
      <video
        src={vid4}
        autoPlay
        controls
        loop
        playsInline
        className={styles.brandvid}
        style={{ top: `${90 - scrollPosition * 0.05}%`, right: "20%" }}
      >
        Your browser does not support the vedio tag.
      </video>
      <p className={styles.brandHeading}>3D Animation</p>
      <p className={styles.brandDisc1}>
        We create dynamic 3D content and videos, with product modelling and
        visualisations done in stunning studios and scenes, all with the magic
        of CGI. Our creative design services in 3D/VFX span across 3D content
        animation. 3D modelling, visualisations and AR/VR solutions that
        eliminate the boundaries between reality and imagination
      </p>
      <p className={styles.brandDisc2}>
        Once we have a better understanding of your brand, we start to develop a
        3D Animation that includes the following elements:
      </p>
      <div className={styles.brandDisc3}>
        <p className={styles.brancdpoints}>
          <p className={styles.brandDisc3Head}>
            Unleashing boundless creativity:
          </p>
          Exploring the limitless possibilities of 3D animation, where
          imagination comes to life in stunning visuals and captivating stories
        </p>
      </div>
      <div className={styles.brandDisc3}>
        <p className={styles.brancdpoints}>
          <p className={styles.brandDisc3Head}>Bringing characters to life: </p>
          Delving into the art of character animation, where digital puppets
          become beloved heroes and relatable protagonists.
        </p>
      </div>
      <div className={styles.brandDisc3}>
        <p className={styles.brancdpoints}>
          <p className={styles.brandDisc3Head}>Crafting immersive worlds: </p>
          Unveiling the process of creating breathtaking landscapes, fantastical
          environments, and realistic scenes using 3D tools.
        </p>
      </div>
      <div className={styles.brandDisc3}>
        <p className={styles.brancdpoints}>
          <p className={styles.brandDisc3Head}>
            Pushing the boundaries of storytelling:{" "}
          </p>
          Highlighting how 3D animation can break free from traditional
          filmmaking limitations, enabling innovative narratives and visual
          experiences.
        </p>
      </div>
      <div className={styles.brandDisc3}>
        <p className={styles.brancdpoints}>
          <p className={styles.brandDisc3Head}>The magic of motion:</p>
          Appreciating the artistry behind bringing objects and characters to
          life with fluid movement and realistic physics.
        </p>
      </div>
      <p className={styles.footerHead}>
        Want to get your 3D Animation done? Let’s talk about it!!
      </p>
    </div>
  );
};

export default ThreeD;
