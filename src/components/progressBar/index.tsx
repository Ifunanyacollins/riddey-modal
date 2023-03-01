import React from "react";
import styles from "./progressBar.module.css";
type ProgressBarProps = {
  type: "danger" | "success" | "warning";
  value?: number;
};
function ProgressBar({ type, value = 10 }: ProgressBarProps) {
  const progressType: any = {
    danger: "progress-bar--danger",
    warning: "progress-bar--warning",
    success: "progress-bar--success",
  };
  return (
    <div className={`${styles["progress-bar"]} `}>
      <div
        style={{ width: `${value}%` }}
        className={`${styles["progress-bar__bar"]} ${
          styles[progressType[type]]
        }`}
      ></div>
    </div>
  );
}

export default ProgressBar;
