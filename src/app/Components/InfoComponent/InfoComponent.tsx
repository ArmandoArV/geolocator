"use client";
import React, { useState } from "react";
import styles from "./InfoComponent.module.css";

interface InfoComponentProps {
  ip: string;
  city: string;
  region: string;
  country: string;
  latitud: string;
  longitud: string;
  timezone: string;
  currency: string;
  hostname: string;
}

export default function InfoComponent({
  ip,
  city,
  region,
  country,
  latitud,
  longitud,
  timezone,
  currency,
  hostname,
}: InfoComponentProps): JSX.Element {
  return (
    <div className={styles.ipContainer}>
      <div className={styles.information}>
        <h2 className={styles.title}> IP Address:</h2>
        <p className={styles.info}>{ip}</p>
      </div>
      <div className={styles.information}>
        <h2 className={styles.title}> City:</h2>
        <p className={styles.info}>{city}</p>
      </div>
      <div className={styles.information}>
        <h2 className={styles.title}> Region:</h2>
        <p className={styles.info}>{region}</p>
      </div>
      <div className={styles.information}>
        <h2 className={styles.title}> Country:</h2>
        <p className={styles.info}>{country}</p>
      </div>
      <div className={styles.information}>
        <h2 className={styles.title}> Latitud:</h2>
        <p className={styles.info}>{latitud}</p>
      </div>
      <div className={styles.information}>
        <h2 className={styles.title}> Longitud:</h2>
        <p className={styles.info}>{longitud}</p>
      </div>
      <div className={styles.information}>
        <h2 className={styles.title}> Timezone:</h2>
        <p className={styles.info}>{timezone}</p>
      </div>
      <div className={styles.information}>
        <h2 className={styles.title}> Currency:</h2>
        <p className={styles.info}>{currency}</p>
      </div>
      <div className={styles.information}>
        <h2 className={styles.title}> Hostname:</h2>
        <p className={styles.info}>{hostname}</p>
      </div>
    </div>
  );
}
