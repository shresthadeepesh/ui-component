import React, { FC } from "react";
import "./style.scss";

type ButtonType = "primary" | "danger" | "ghost";

type ButtonSize = "small" | "large" | "medium";

type ButtonShape = "rounded" | "square" | "circle";

export interface ButtonProps {
  /**
   * What the button should do?
   */
  onClick: () => void;
  /**
   * Checks if the button should be disabled
   */
  disabled?: boolean;
  /**
   * Button contents
   */
  label: string;
  /**
   * How the button should look?
   */
  type?: ButtonType;
  /**
   * How large should the button be?
   */
  size?: ButtonSize;
  /**
   * How the button shape should look?
   */
  shape?: ButtonShape;
}

/**
 * Primary UI component for user interaction
 */
export const Button: FC<ButtonProps> = ({
  onClick,
  label,
  type = "primary",
  size = "medium",
  disabled = false,
  shape = "square",
}) => {
  const btnClass = `${
    type === "danger" ? "danger" : type === "ghost" ? "ghost" : type
  }`;
  const btnSize = `${
    size === "large" ? "large" : size === "small" ? "small" : size
  }`;
  return (
    <button
      disabled={disabled}
      className={`btn ${btnClass} ${btnSize} ${shape}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
