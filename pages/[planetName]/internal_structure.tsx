import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Infobox from "@/components/infobox";
import Switcher from "@/components/switcher/Switcher";
import NavbarContainer from "@/components/navbar/NavbarContainer";
import PlanetImage from "@/components/image/PlanetImage";
import PlanetInfo from "@/components/planetInfo/PlanetInfo";
import { Entry, EntrySkeletonType, createClient } from "contentful";
import { IPlanetFields } from "@/@types/generated/contentful";
import { GetStaticPaths, GetStaticProps } from 'next'
import { InferGetStaticPropsType } from 'next'


const client = createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: process.env.CONTENTFUL_SPACE_ID as string,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: process.env.CONTENTFUL_API_TOKEN as string,
})

const inter = Inter({ subsets: ["latin"] });

interface PageProps {
  planet: Entry<EntrySkeletonType<IPlanetFields, "planet">, undefined, string>
}

export const getStaticPaths: GetStaticPaths = async () => {
  const entries = await client
   .getEntries<EntrySkeletonType<IPlanetFields, "planet">>({content_type: "planet"})
  return {
    paths: entries.items.map((planet) => {
      return {
        params: {planetName: planet.fields.name}
      }
    }),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<PageProps>= async(context) => {
  const entries = await client
    .getEntries<EntrySkeletonType<IPlanetFields, "planet">>({content_type: "planet"})
    console.log("entries", entries)
  const planet = entries.items.find((entry) => {
    return entry.fields.name === context?.params?.planetName
  })
  if (planet === undefined) {
    return { notFound: true }
  }
  return { props: { planet: planet } };
};

export default function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {

    const infos = [
    {
      label: "ROTATION TIME",
      title: props.planet.fields.rotationTime
    },
    {
      label: "REVOLUTION TIME",
      title: props.planet.fields.revolutionTime
    },
    {
      label: "RADIUS",
      title: props.planet.fields.radius
    },
    {
      label: "AVERAGE TEMP.",
      title: props.planet.fields.averageTemp
    }
  ]

  return (
    <>
      <div className={styles.header}>
        <NavbarContainer />
      </div>
      <div className={styles.container}>
        <div className={styles.image}>
          <PlanetImage
            imageUrl={props.planet.fields.overviewImage.fields.file.url}  
          />
        </div>
        <div className={styles.content}>
          <PlanetInfo
            title={props.planet.fields.name}
            description={props.planet.fields.overview}
            link={props.planet.fields.source}
          />
        </div>
        <div className={styles.switcher}>
          <Switcher planet="earth" selectedElement="01" />
        </div>
        <div className={styles.footer}>
          {infos.map((info) => {
            return (
              <Infobox
                key={info.title}
                label={info.label} 
                title={info.title} 
              />
            )
          })}
          
        </div>
      </div>
    </>
  );
}
