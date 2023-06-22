import styles from "./Heading3Numeric.module.css"
import { ReactNode } from "react";

type HeadingProps3 = { 
    children: ReactNode,
    className?: string,
};
  
  const Heading3Numeric: React.FC<HeadingProps3> = ({ children, className }) => {
    return <h3 className={`${styles.heading3} ${className}`}>{children}</h3>   
  };
  
  export default Heading3Numeric;