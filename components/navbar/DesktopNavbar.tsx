import Heading4 from "../typography/Heading4";
import styles from "./DesktopNavbar.module.css";

type Link = {
    name: string;
    href: string;
};

const DesktopNavbar: React.FC<{}> = ({}) => {
    const links = [
        {
          name: "mercury",
          href: "#",
        },
        {
          name: "venus",
          href: "#",
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
        <div key={link.href} className={styles.link}>
          <a href={link.href}>{link.name}</a>
        </div>
      );
    })}
  </div>
    )
}

export default DesktopNavbar;
