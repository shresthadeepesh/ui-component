import "./style.css";
import React, { FC } from "react";

type ButtonType = "primary" | "danger" | "ghost";

interface ButtonProps {
  onClick: () => void;
  title: string;
  type?: ButtonType;
}

const Button: FC<ButtonProps> = ({ onClick, title }) => {
  return (
    <button className="btn" onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
