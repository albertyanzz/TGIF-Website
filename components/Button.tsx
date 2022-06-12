import { ReactNode, useState } from "react";

interface IProps {
  color: string;
  width: string;
  children: ReactNode;
}

export const Button: React.FC<IProps> = ({ color, width, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  // const color = "#F4BA8D";
  // const width = "200px"

  const style = {
    backgroundColor: isHovered ? "white" : color,
    borderRadius: "1000px",
    width: width,
    height: "50px",
    border: `2px solid ${color}`,
    color: isHovered ? color : "white",
    fontSize: "20px",
    cursor: isHovered ? "pointer" : "auto",
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
      {children}
    </button>
  );
};
