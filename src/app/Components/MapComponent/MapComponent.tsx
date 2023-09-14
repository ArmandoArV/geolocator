import React, { useEffect } from "react";
import styles from "./Map.module.css";

interface MapComponentProps {
  lat: number;
  lng: number;
}

declare global {
  interface Window {
    initMap: () => void;
  }
}

const MapComponent: React.FC<MapComponentProps> = ({ lat, lng }) => {
  const API_KEY = "AIzaSyD-KcFaPMb-MQGwntnZb7ufJPgVgKoHB_M";
  const initMap = async () => {
    try {
      // Variables to show the map at the specified lat and lng
      const zoom = 10;

      // Initialize the map at the specified lat and lng
      const map = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
          center: { lat, lng },
          zoom,
          disableDefaultUI: true,
        }
      );

      const marker = new google.maps.Marker({
        position: { lat, lng },
        optimized: true,
        map,
      });
    } catch (err) {
      window.parent.postMessage(err, "*");
    }
  };

  useEffect(() => {
    // Load the Google Maps JavaScript API
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      window.initMap = initMap;
      initMap(); // Call initMap after the script has loaded
    };

    document.head.appendChild(script);

    return () => {
      // Clean up script tag on unmount if necessary
      document.head.removeChild(script);
    };
  }, [lat,lng]);

  return <div id="map" className={styles.map_container} />;
};

export default MapComponent;
