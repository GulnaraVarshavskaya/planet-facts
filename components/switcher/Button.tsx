import styles from "./Button.module.css";
import Heading3 from "../typography/Heading3";
import Heading3Numeric from "../typography/Heading3Numeric";

interface ButtonProps {
  selectedElement?: string;
  count: string;
  planet: "venus" | "earth" | "mars";
}

const Button: React.FC<ButtonProps & React.ComponentProps<"button">> = ({
  children,
  selectedElement,
  count,
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
      <Heading3 className={styles.switcherButtonText}>{children}</Heading3>
    </button>
  );
};

export default Button;
