import styles from "./NavbarContainer.module.css";
import Hamburger from "./Hamburger";
import { ReactNode } from "react";
import Navbar from "./DesktopNavbar";

// type NavbarContainerProps = {
//     children: ReactNode;
// }

const NavbarContainer: React.FC<{}> = ({}) => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.logoContainer}>
        <span>The planets</span>
      </div>
      <Navbar />
      <Hamburger/>
    </div>
  );
};

export default NavbarContainer;
