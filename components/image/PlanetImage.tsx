import styles from "./PlanetImage.module.css"

type PlanetImageProps = {
    image?: string,
    imageUrl: string,
}

const PlanetImage = ({image, imageUrl}: PlanetImageProps) => {
  return (
    <>
    <div className={styles.imageContainer}>
        <img src={imageUrl} alt={image} />
    </div>
    </>
  )
}

export default PlanetImage