import styles from "./PlanetInfo.module.css"
import Heading1 from "../typography/Heading1"
import Body from "../typography/Body"

type PlanetInfoProps = {
    title: string,
    description: string,
    link: string
}

const PlanetInfo = ({title, description, link}: PlanetInfoProps) => {
    return (
        <div className={styles.planetInfoContainer}>
            <Heading1 className={styles.planetInfoTitle}>{title}</Heading1>
            <Body>{description}</Body>
            <Body className={styles.planetInfoSource}>
                Source: 
                <a className={styles.wikipediaLink} href={link} target="_blank">
                    Wikipedia
                    <img className={styles.linkIcon} src="/wikipedia-link.svg" alt="link" />
                </a>
            </Body>
        </div>
    )}

export default PlanetInfo