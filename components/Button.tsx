import { useState } from "react";

export const Button: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const color = "blue";

  const style = {
    backgroundColor: isHovered ? "white" : color,
    borderRadius: "1000px",
    width: "100px",
    height: "50px",
    border: `2px solid ${isHovered ? color : "white"}`,
    color: isHovered ? color : "white",
  };

  return (
    <button
      onMouseOver={() => {
        setIsHovered(true);
      }}
      onMouseOut={() => {
        setIsHovered(false);
      }}
      style={style}
    >
      Hello
    </button>
  );
};
