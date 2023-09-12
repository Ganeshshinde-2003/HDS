import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/images/HDSlogo.png";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

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
          <Link to="/">
            <img src={Logo} alt="HDSLLP" className={styles.logo} />
          </Link>
        </div>
        <div
          className={styles.secdev}
          style={{ display: display ? "flex" : "none" }}
        >
          <div className={styles.navigation}>
            <Link to="/works">Work</Link>
            <Link to="/expertise">Expertise</Link>
            <Link to="/about">About Haraay</Link>
            <Link to="/careerdashboard">Careers</Link>
          </div>
          <div>
            <Link to="/contactus">
              <button className={styles.contact}>Contact us</button>
            </Link>
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
