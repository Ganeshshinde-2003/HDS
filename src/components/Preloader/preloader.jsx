import { useEffect } from "react";
import "./style.css";
import { preLoaderAnim } from "../preloaderanimation";

function Preloader() {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <p>Haraay Design Studio</p>
      <div className="texts-container">
        <span>Branding,</span>
        <span>Website,</span>
        <span>Digital Experience,</span>
      </div>
    </div>
  );
}

export default Preloader;
