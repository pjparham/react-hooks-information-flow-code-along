import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, propChildrenColor }) {
  function handleClick(){
    const newColor = getRandomColor();
    onChangeColor(newColor);
  }
  
  
  return (
    <div 
      onClick={handleClick} 
      className="child" 
      style={{ backgroundColor: propChildrenColor}}
    />
    );
}

export default Child;
