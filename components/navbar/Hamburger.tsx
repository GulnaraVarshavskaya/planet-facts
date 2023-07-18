import React from "react";
import MobileNavbar from "./MobileNavbar";
import styles from "./Hamburger.module.css";

const Hamburger: React.FC<React.ComponentProps<"button">> = ({...props}) => {

  const [showNavbar, setShowNavbar] = React.useState<boolean>(false);
  const toggleButton = () => { setShowNavbar(!showNavbar) }

  return (
    <div className={styles.hamburgerContainer}>
      <button 
      {...props}
      onClick={toggleButton} 
      className={styles.hamburgerButton}>
      <svg
        className={styles.hamburgerSvg}
        width="24"
        height="17"
        viewBox="0 0 24 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="3" fill="white" />
        <rect y="7" width="24" height="3" fill="white" />
        <rect y="14" width="24" height="3" fill="white" />
      </svg>
      </button>
      {showNavbar ? <MobileNavbar /> : null}
      
      
    </div>
  );
};

export default Hamburger;
