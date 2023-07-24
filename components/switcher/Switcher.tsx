import { useState } from "react";
import Button from "./Button";
import styles from "./Switcher.module.css"

type SwitcherProps = {
  planet: "venus" | "earth" | "mars";
  selectedElement: "01" | "02" | "03";
};

const Switcher = ({ selectedElement, planet }: SwitcherProps) => {
  return (
    <div className={styles.switcherContainer}>
      <Button
        selectedElement={selectedElement}
        count="01"
        title="Overview"
        titleMobile="Overview"
        planet={planet}
        onClick={() => {
          window.alert("Hi");
        }}
        // disabled={true}
        className="bigPadding"
      >
       
      </Button>
      <Button
        selectedElement={selectedElement}
        count="02"
        title="Internal Structure"
        titleMobile="Structure"
        planet={planet}
        onClick={() => {
          window.alert("Hi");
        }}
        // disabled={true}
        className="bigPadding"
      >
        Internal Structure
      </Button>
      <Button
        selectedElement={selectedElement}
        count="03"
        title="Surface Geology"
        titleMobile="Surface"
        planet={planet}
        onClick={() => {
          window.alert("Hi");
        }}
        // disabled={true}
      >
        
      </Button>
    </div>
  );
};

export default Switcher;
