import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/images/HDSlogo.png";
import styles from "./style.module.css";

function Navbar() {
  const [display, setDisplay] = useState(
    window.innerWidth <= 800 ? false : true
  );

  const toggleMenu = () => {
    setDisplay(!display);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <a href="/"><img src={Logo} alt="HDSLLP" className={styles.logo} /></a>
        </div>
        <div
          className={styles.secdev}
          style={{ display: display ? "flex" : "none" }}
        >
          <div className={styles.navigation}>
            <a href="/">Work</a>
            <a href="/services">Service</a>
            <a href="/about">About</a>
            <a href="/">Careers</a>
          </div>
          <div>
            <a href="/contactus">
              <button className={styles.contact}>Contact us</button>
            </a>
          </div>
        </div>
      </div>

      <FontAwesomeIcon
        icon={faBars}
        className={styles.menuIcon}
        onClick={toggleMenu}
      />
    </div>
  );
}

export default Navbar;
