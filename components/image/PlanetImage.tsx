import styles from "./PlanetImage.module.css"

type PlanetImageProps = {
    image?: HTMLImageElement
}

const PlanetImage = ({image}: PlanetImageProps) => {
  return (
    <div className="imageContainer">PlanetImage</div>
  )
}

export default PlanetImage