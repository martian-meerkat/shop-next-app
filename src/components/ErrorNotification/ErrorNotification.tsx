"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./ErrorNotification.module.scss";

interface ErrorNotificationProps {
  message: string | null;
  duration?: number;
}

export const ErrorNotification = ({
  message,
  duration = 5000,
}: ErrorNotificationProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return createPortal(
    <div className={styles.notification}>
      <span className={styles.message}>{message}</span>
      <button onClick={handleClose} className={styles.closeButton}>
        ✕
      </button>
    </div>,
    document.body,
  );
};

export default ErrorNotification;
