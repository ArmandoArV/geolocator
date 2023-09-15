import React from "react";
import styles from "./InfoComponent.module.css";

interface InfoComponentProps {
  ip: string;
  city: string;
  region: string;
  country: string;
  latitud: number;
  longitud: number;
  timezone: string;
  currency: string;
  hostname: string;
}

const InfoComponent: React.FC<InfoComponentProps> = ({
  ip,
  city,
  region,
  country,
  latitud,
  longitud,
  timezone,
  currency,
  hostname,
}) => {
  return (
    <div className={styles.ipContainer}>
      <div className={styles.information}>
        <h2 className={styles.title}>IP Address:</h2>
        <p className={styles.info}>{ip}</p>
      </div>
      <div className={styles.information}>
        <h2 className={styles.title}>City:</h2>
        <p className={styles.info}>{city}</p>
      </div>
      <div className={styles.information}>
        <h2 className={styles.title}>Region:</h2>
        <p className={styles.info}>{region}</p>
      </div>
      <div className={styles.information}>
        <h2 className={styles.title}>Country:</h2>
        <p className={styles.info}>{country}</p>
      </div>
      <div className={styles.information}>
        <h2 className={styles.title}>Latitud:</h2>
        <p className={styles.info}>{latitud}</p>
      </div>
      <div className={styles.information}>
        <h2 className={styles.title}>Longitud:</h2>
        <p className={styles.info}>{longitud}</p>
      </div>
    </div>
  );
};

export default InfoComponent;
