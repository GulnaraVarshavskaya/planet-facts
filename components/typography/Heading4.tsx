import styles from "./Heading4.module.css"
import { ReactNode } from "react";

type HeadingProps4 = { 
    children: ReactNode,
    className?: string
};

const Heading4: React.FC<HeadingProps4> = ({ children, className })=> {
    return <h4 className={`${styles.heading4} ${className}`}>{children}</h4>
}

export default Heading4;