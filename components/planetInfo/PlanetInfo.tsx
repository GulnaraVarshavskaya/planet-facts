import styles from "./PlanetInfo.module.css"
import Heading1 from "../typography/Heading1"
import Body from "../typography/Body"

type PlanetInfoProps = {
    title: string,
    description: string
}

const PlanetInfo = ({title, description}: PlanetInfoProps) => {
    return (
        <div className={styles.planetInfoContainer}>
            <Heading1 className={styles.planetInfoTitle}>{title}</Heading1>
            <Body>{description}</Body>
        </div>
    )}

export default PlanetInfo