"use client";
import Image from "next/image";
import styles from "./page.module.css";
import SearchComponent from "./Components/SearchComponent/SearchComponent";
import InfoComponent from "./Components/InfoComponent/InfoComponent";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState(""); // Local state for search
  const [getIP, setIP] = useState("");
  const [getCity, setCity] = useState("");
  const [getRegion, setRegion] = useState("");
  const [getCountry, setCountry] = useState("");
  const [getLatitud, setLatitud] = useState("");
  const [getLongitud, setLongitud] = useState("");
  const [getTimezone, setTimezone] = useState("");
  const [getCurrency, setCurrency] = useState("");
  const [getHostname, setHostname] = useState("");

  return (
    <main className={styles.main}>
      <div className={styles.outerContainer}>
        <div className={styles.topContainer}>
          <SearchComponent search={search} setSearch={setSearch} />
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.leftContainer}>
            <InfoComponent
              ip={getIP}
              city={getCity}
              region={getRegion}
              country={getCountry}
              latitud={getLatitud}
              longitud={getLongitud}
              timezone={getTimezone}
              currency={getCurrency}
              hostname={getHostname}
            />
          </div>
          <div className={styles.rightContainer}></div>
        </div>
      </div>
    </main>
  );
}
