import Heading2 from "../typography/Heading2"
import Heading4 from "../typography/Heading4"
import styles from "./Infobox.module.css"

type InfoboxProps = {
    label: string,
    title: string
}

const Infobox = ({title, label}: InfoboxProps) => {
  return (
    <div className={styles.infobox}>
        <Heading4 className={styles.infoboxLabel}>{label}</Heading4>
        <Heading2>{title}</Heading2>
    </div>
  )
}

export default Infobox