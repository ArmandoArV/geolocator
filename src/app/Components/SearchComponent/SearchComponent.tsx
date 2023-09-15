// Inside SearchComponent.tsx
import React from "react";
import styles from "./Search.module.css";

interface SearchComponentProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchComponent({
  search,
  setSearch,
}: SearchComponentProps): JSX.Element {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.SearchContainer}>
        <label htmlFor="searchInput" className={styles.searchLabel}>
          IP: 
        </label>
        <input
          type="text"
          id="searchInput"
          className={styles.searchInput}
          placeholder="Ingrese su búsqueda"
          value={search}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}
