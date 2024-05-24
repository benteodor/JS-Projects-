import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const location = useLocation();
  const [search, setSearch] = useState("");
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    setSearch("");
  }, [location]);
  return (
    <div className="search">
      Search
      <input
        type="text"
        placeholder="Search for a destination"
        onChange={searchHandler}
        value={search}
      ></input>
    </div>
  );
};

export default SearchBar;
