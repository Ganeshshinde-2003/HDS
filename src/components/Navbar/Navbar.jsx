import {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/images/HDSlogo.png";
import styles from "./style.module.css";

function Navbar() {

  const [display, setDisplay] = useState(true);

  const toggleMenu = () => {
    setDisplay(!display);
  };

  return ( 
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <img src={Logo} alt="HDSLLP" className={styles.logo} />
        </div>
        <div className={styles.secdev} style={{"display" : display ? "flex" : "none"}}>
          <div className={styles.navigation}>
            <a href="/">Work</a>
            <a href="/">Service</a>
            <a href="/">About</a>
            <a href="/">Careers</a>
          </div>
          <div>
            <button className={styles.contact}>Contact us</button>
          </div>
        </div>
      </div>

      <FontAwesomeIcon icon={faBars} className={styles.menuIcon} onClick={toggleMenu} />
    </div>
  );
}

export default Navbar;
