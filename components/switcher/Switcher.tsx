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
        planet={planet}
        onClick={() => {
          window.alert("Hi");
        }}
        // disabled={true}
        className="bigPadding"
      >
        Overview
      </Button>
      <Button
        selectedElement={selectedElement}
        count="02"
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
        planet={planet}
        onClick={() => {
          window.alert("Hi");
        }}
        // disabled={true}
      >
        Surface Geology
      </Button>
    </div>
  );
};

export default Switcher;
