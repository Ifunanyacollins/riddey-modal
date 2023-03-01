import React from "react";
import { createPortal } from "react-dom";
import Button from "../button";
import { modalProps } from "./types";
import styles from "./modal.module.css";
function Modal({
  open = false,
  closabel = true,
  onCancel,
  headerTitle,
  footer = true,
  children,
}: modalProps) {
  if (!open) return null;
  return createPortal(
    <div className={styles.modal}>
      <div className={styles["modal-content"]}>
        {closabel && (
          <div className={styles["modal-closable"]} onClick={onCancel}>
            &#x2613;
          </div>
        )}
        <div className={styles["modal-header"]}>
          <h4>{headerTitle}</h4>
        </div>
        <div className={styles["modal-body"]}>{children}</div>
        {footer && (
          <div className={styles["modal-footer"]}>
            <Button>Ok</Button>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}

export default Modal;
