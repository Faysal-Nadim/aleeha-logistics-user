import React from "react";

const Cp = ({ percent }) => {
  const filledColor = `rgb(${Math.round(
    255 - (255 * percent) / 100
  )}, ${Math.round((255 * percent) / 100)}, 0)`;
  const emptyColor = "rgb(255, 255, 255)";

  const borderStyle = {
    width: "200px", // Adjust the width and height as per your preference
    height: "200px",
    border: "2px solid",
    borderColor: `linear-gradient(to right, ${filledColor} 0%, ${filledColor} ${percent}%, ${emptyColor} ${percent}%, ${emptyColor} 100%)`,
  };

  return <div style={borderStyle}></div>;
};

export default Cp;
