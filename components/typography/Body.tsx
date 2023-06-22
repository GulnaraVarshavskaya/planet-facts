import { ReactNode } from "react";
import styles from "./Body.module.css"

type BodyProps = { 
    children: ReactNode,
    className?: string,
}

const Body: React.FC<BodyProps> = ({ children, className }) => {
    return <p className={`${styles.body} ${className}`}>{children}</p>
}

export default Body;