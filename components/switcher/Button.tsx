import styles from "./Button.module.css";
import Heading3 from "../typography/Heading3";
import Heading3Numeric from "../typography/Heading3Numeric";

interface ButtonProps {
  selectedElement?: string;
  count: string;
  title: string;
  titleMobile: string;
  planet: "venus" | "earth" | "mars";
}

const Button: React.FC<ButtonProps & React.ComponentProps<"button">> = ({
  selectedElement,
  count,
  title,
  titleMobile,
  planet,
  className,
  ...props
}) => {
  const activeClass = selectedElement === count ? styles.active : "";
  return (
    <button
      {...props}
      className={
        styles.switcherButton + " " + styles[planet] + " " + activeClass + " " + className
      }
    >
      <Heading3Numeric className={styles.switcherButtonNumber}>
        {count}
      </Heading3Numeric>
      <Heading3 className={styles.switcherButtonTextMobile}>{titleMobile}</Heading3>
      <Heading3 className={styles.switcherButtonTextDesktop}>{title}</Heading3>
    </button>
  );
};

export default Button;
