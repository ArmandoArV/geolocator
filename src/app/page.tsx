"use client";
import Image from "next/image";
import styles from "./page.module.css";
import SearchComponent from "./Components/SearchComponent/SearchComponent";
import InfoComponent from "./Components/InfoComponent/InfoComponent";
import { useState, useEffect } from "react";
import MapComponent from "./Components/MapComponent/MapComponent";

export default function Home() {
  const [search, setSearch] = useState(""); // Local state for search
  const [getIP, setIP] = useState("");
  const [getCity, setCity] = useState("");
  const [getRegion, setRegion] = useState("");
  const [getCountry, setCountry] = useState("");
  const [getLatitud, setLatitud] = useState(0);
  const [getLongitud, setLongitud] = useState(0);
  const [getTimezone, setTimezone] = useState("");
  const [getCurrency, setCurrency] = useState("");
  const [getHostname, setHostname] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(`https://ipapi.co/${search}/json/`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        console.log("Network response was ok");
      }
      const data = await response.json();
      console.log(data);
      setIP(data.ip);
      setCity(data.city); 
      setRegion(data.region); 
      setCountry(data.country_name || data.country); 
      setLatitud(data.latitude); 
      setLongitud(data.longitude); 
      setTimezone(data.timezone); 
      setCurrency(data.currency);
      setHostname(data.hostname); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (search) {
      fetchData();
    }
  }, [search]);

  return (
    <main className={styles.main}>
      <div className={styles.outerContainer}>
        <div className={styles.headerContainer}>
          <h1 className={styles.title}>IP Address Tracker</h1>
        </div>
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
          <div className={styles.rightContainer}>
            <MapComponent lat={getLatitud} lng={getLongitud} />
          </div>
        </div>
      </div>
    </main>
  );
}
