import Heading2 from "../typography/Heading2"
import Heading4 from "../typography/Heading4"
import styles from "./Infobox.module.css"

type InfoboxProps = {
    label: string,
    title: string
}

const Infobox = ({title, label}: InfoboxProps) => {

  const infos = [
    {
      label: "ROTATION TIME",
      title: "58.6 days"
    },
    {
      label: "REVOLUTION TIME",
      title: "87.97 days"
    },
    {
      label: "RADIUS",
      title: "2,439.7 km"
    },
    {
      label: "AVERAGE TEMP.",
      title: "430°c"
    }
  ]

  return (
    <div className={styles.infoboxContainer}>
    {infos.map((info: InfoboxProps) => {
      return (
        <div className={styles.infobox}>
          <Heading4 className={styles.infoboxLabel}>{info.label}</Heading4>
          <Heading2>{info.title}</Heading2>
      </div>
      )
    })}
      
    </div>
  )
}

export default Infobox