import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Infobox from "@/components/infobox";
import Switcher from "@/components/switcher/Switcher";
import NavbarContainer from "@/components/navbar/NavbarContainer";
import PlanetImage from "@/components/image/PlanetImage";
import PlanetInfo from "@/components/planetInfo/PlanetInfo";
import { createClient } from "contentful";

const client = createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: process.env.CONTENTFUL_SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: process.env.CONTENTFUL_API_TOKEN,
})

const inter = Inter({ subsets: ["latin"] });

export const getStaticProps = async() => {
  const entries = await client
  .getEntries()
  console.log("entries", entries.items[0]);
  return { props: { planet: entries.items[1] } };
};

export default function Home(props) {
  console.log("props", props);
  return (
    <>
      <div className={styles.header}>
        <NavbarContainer />
      </div>
      <div className={styles.container}>
        <div className={styles.image}>
          <PlanetImage
            urlMobile="/earth-mobile.svg"
            urlDesktop={props.planet.fields.overviewImage.fields.file.url}
            urlTablet="/earth-tablet.svg"
          />
        </div>
        <div className={styles.content}>
          <PlanetInfo
            title={props.planet.fields.name}
            description={props.planet.fields.overview}
          />
        </div>
        <div className={styles.switcher}>
          <Switcher planet="earth" selectedElement="01" />
        </div>
        <div className={styles.footer}>
          <Infobox label="ROTATION TIME" title="58.6 DAYS" />
        </div>
      </div>
    </>
  );
}
