import React from "react";
import styles from "./button.module.css";
import { buttonProps } from "./types";

function Button({
  text,
  children,
  iconPosition = "left",
  type = "primary",
  className,
  style,
  block = false,
  loading = false,
  onClick = () => null,
  ...rest
}: buttonProps & React.HTMLProps<HTMLButtonElement>) {
  const btnTypes = {
    primary: "btn-primary",
  };
  return (
    <button
      {...rest}
      style={style}
      onClick={onClick}
      className={`${styles.btn} ${styles[btnTypes[type]]} ${
        !!block && styles["btn-block"]
      } ${className}`}
    >
      {text ? text : children}
    </button>
  );
}

export default Button;
