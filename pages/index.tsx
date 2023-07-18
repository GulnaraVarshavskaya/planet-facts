import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Infobox from "@/components/infobox";
import Switcher from "@/components/switcher/Switcher";
import NavbarContainer from "@/components/navbar/NavbarContainer";
import PlanetImage from "@/components/image/PlanetImage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <NavbarContainer />
      </header>
      <main className={`${styles.main} ${inter.className}`}>
          <Switcher planet="earth" selectedElement="01" />
          <PlanetImage />
      </main>
      <div className={styles.infoboxContainer}>
        {/* <Infobox label="ROTATION TIME" title="58.6 DAYS" /> */}
      </div>
    </>
  );
}
