import { ReactNode, useState } from "react";

interface IProps {
  color: string;
  width: string;
  height?: string;
  type?: string;
  onClick?: React.MouseEventHandler;
  children: ReactNode;
}

export const Button: React.FC<IProps> = ({
  color,
  width,
  children,
  height,
  type,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // const color = "#F4BA8D";
  // const width = "200px"

  const style = {
    backgroundColor: isHovered ? "white" : color,
    borderRadius: "1000px",
    width: width,
    height: height ? height : "50px",
    border: `2px solid ${color}`,
    color: isHovered ? color : "white",
    fontSize: height ? "80%" : "20px",
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
      type={
        type === "submit" ? "submit" : type === "reset" ? "reset" : "button"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};
