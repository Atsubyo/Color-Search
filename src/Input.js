import "./css_files/input.css";
import React from "react";
import colorNames from "colornames";
import { useRef } from "react";

const Input = ({
  colorValue,
  setColorValue,
  setHexValue,
  setIsDarkText,
  isDarkText,
}) => {
  const inputRef = useRef();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label>Enter Desired Color: </label>
      <input
        autoFocus
        ref={inputRef}
        type="text"
        placeholder="Enter Desired Color"
        required
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
        Toggle Text Color (White/Black)
      </button>
    </form>
  );
};

export default Input;
