import { useState } from "react";
import Button from "./Button";

type SwitcherProps = {
  planet: "venus" | "earth" | "mars";
  selectedElement: "01" | "02" | "03";
};
const Switcher = ({ selectedElement, planet }: SwitcherProps) => {
  return (
    <>
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
    </>
  );
};

export default Switcher;
