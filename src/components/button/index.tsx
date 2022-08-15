import React, { FC } from "react";
import "./style.scss";

type ButtonType = "primary" | "danger" | "ghost";

type ButtonSize = "small" | "large" | "medium";

interface ButtonProps {
  onClick: () => void;
  label: string;
  type?: ButtonType;
  size?: ButtonSize;
}

const Button: FC<ButtonProps> = ({
  onClick,
  label,
  type = "primary",
  size = "medium",
}) => {
  const btnClass = `${
    type === "danger" ? "danger" : type === "ghost" ? "ghost" : type
  }`;
  const btnSize = `${
    size === "large" ? "large" : size === "small" ? "small" : size
  }`;
  return (
    <button className={`btn ${btnClass} ${btnSize}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
