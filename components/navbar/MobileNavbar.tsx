import Heading4 from "../typography/Heading4";
import styles from "./MobileNavbar.module.css";

type Link = {
  name: string;
  href: string;
  fill: string;
};

const MobileNavbar: React.FC<{}> = ({}) => {
  const links = [
    {
      name: "mercury",
      href: "#",
      fill: "#DEF4FC",
    },
    {
      name: "venus",
      href: "#",
      fill: "#F7CC7F",
    },
    {
      name: "earth",
      href: "#",
    },
    {
      name: "mars",
      href: "#",
    },
    {
      name: "jupiter",
      href: "#",
    },
    {
      name: "saturn",
      href: "#",
    },
    {
      name: "uranus",
      href: "#",
    },
    {
      name: "neptune",
      href: "#",
    },
  ];
  return (
    <div className={styles.linksContainer}>
      {links.map((link: Link) => {
        return (
          <div className={styles.linkWrapper}>
            <div key={link.href} className={styles.link}>
              <svg
                className={styles.linkDots}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="10" fill={link.fill} />
              </svg>
              <a href={link.href}>{link.name}</a>
            </div>
            <svg
              className={styles.arrowBtn}
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path opacity="0.4" d="M1 1L5 5L1 9" stroke="white" />
            </svg>
          </div>
        );
      })}
    </div>
  );
};

export default MobileNavbar;
