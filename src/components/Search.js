import React from "react";
import FilteredRegions from "./FilteredRegions";
import { FiSearch } from "react-icons/fi";

const Search = ({
  countrySearch,
  handleCountrySearch,
  countries,
  setCountries,
}) => {
  return (
    <div className="search">
      <div className="search-field">
        <FiSearch className="search-icon" />
        <input
          type="search"
          value={countrySearch}
          onChange={handleCountrySearch}
          placeholder="Search for a country"
        />
      </div>

      <FilteredRegions countries={countries} setCountries={setCountries} />
    </div>
  );
};

export default Search;
