import { type FC } from "react";
import styles from "./Loader.module.scss";

const Loader: FC = () => {
  return (
    <div className={styles.container}>
      <video autoPlay loop muted playsInline className={styles.video}>
        <source src="Material wave loading.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default Loader;
