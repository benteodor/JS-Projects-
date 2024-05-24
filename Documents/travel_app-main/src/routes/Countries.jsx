import { useState, useEffect } from "react";
import axios from "axios";
import Article from "../components/Article";
import SearchBar from "../components/SearchBar";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const showCountries = () => {
      try {
        axios.get("https://restcountries.com/v3.1/all").then((res) => {
          setCountries(res.data.slice(0, 10));
        });
      } catch (error) {
        console.error(error);
      }
    };
    showCountries();
  }, []);

  return (
    <>
      <SearchBar />
      {!countries ? (
        <h2>Loading...</h2>
      ) : (
        <div className="grid">
          {countries.map((country) => (
            <Article key={country.name.common} {...country} />
          ))}
        </div>
      )}
    </>
  );
};

export default Countries;
