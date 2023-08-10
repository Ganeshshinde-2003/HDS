import styles from "./style.module.css";
import Logo from "../../assets/images/HDSlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={`${styles.links} ${styles.linkstwo}`}>
          <a href="/">
            <img src={Logo} alt="LOGO" className={styles.logo} />
          </a>
          <p>Follow Us On:</p>
          <a href="https://www.linkedin.com/company/haraaydesignstudio/">
            <FontAwesomeIcon className={styles.link} icon={faLinkedin} />
          </a>
          <a href="https://www.facebook.com/Hugedesign.in">
            <FontAwesomeIcon className={styles.link} icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/haraay_studio/">
            <FontAwesomeIcon className={styles.link} icon={faInstagram} />
          </a>
          <a href="https://www.behance.net/helloharaaystudio">
            <FontAwesomeIcon className={styles.link} icon={faBehance} />
          </a>
        </div>
        <div className={styles.links}>
          <a href="/about">
            <p className={styles.link}>About</p>
          </a>
          <a href="/">
            <p className={styles.link}>Service</p>
          </a>
          <a href="/">
            <p className={styles.link}>Work</p>
          </a>
        </div>
        <div className={styles.links}>
          <p>Let's Do it - </p>
          <a href="/contactus">
            <button className={styles.button}>Contact Us</button>
          </a>
        </div>
      </div>
      <p className={styles.copy}>©2023 Copyright Haraay Design Studio LLP</p>
    </div>
  );
}

export default Footer;
