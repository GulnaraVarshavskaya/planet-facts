import styles from "./PlanetImage.module.css"

type PlanetImageProps = {
    image?: string,
    urlMobile?: "/earth-mobile.svg" | "mercury-mobile.svg",
    urlDesktop?: "/earth-desktop.svg",
    urlTablet?: "/earth-tablet.svg",
}

const PlanetImage = ({image, urlMobile, urlTablet, urlDesktop}: PlanetImageProps) => {
  return (
    <>
    <div className={styles.imageMobileContainer}>
      <img src={urlMobile} alt={image} />
    </div>
    <div className={styles.imageDesktopContainer}>
        <img src={urlDesktop} alt={image} />
    </div>
    <div className={styles.imageTabletContainer}>
        <img src={urlTablet} alt={image} />
    </div>
    </>
  )
}

export default PlanetImage