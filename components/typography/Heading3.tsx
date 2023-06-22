import styles from "./Heading3.module.css"
import { ReactNode } from "react";

type HeadingProps3 = { 
    children: ReactNode,
    className?: string,
};
  
  const Heading3: React.FC<HeadingProps3> = ({ children, className }) => {
    return <h3 className={`${styles.heading3} ${className}`}>{children}</h3>   
  };
  
  export default Heading3;