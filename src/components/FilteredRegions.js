import React, { useState, useEffect } from "react";
import axios from "axios";

const FilteredRegions = ({ countries, setCountries }) => {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const regions = [
    {
      label: "All",
      name: "all",
    },
    {
      label: "Africa",
      name: "africa",
    },
    {
      label: "Americas",
      name: "americas",
    },
    {
      label: "Asia",
      name: "asia",
    },
    {
      label: "Europe",
      name: "europe",
    },
    {
      label: "Oceania",
      name: "oceania",
    },
  ];

  const handleRegionChange = (event) => {
    event.preventDefault();

    setSelectedRegion(event.target.value);
  };

  const filter = () => {
    if (selectedRegion === "all") {
      axios
        .get("https://restcountries.com/v2/all")
        .then((response) => setCountries(response.data));
    } else {
      axios
        .get(`https://restcountries.com/v2/region/${selectedRegion}`)
        .then((response) => {
          setCountries(response.data);
        });
    }
  };

  useEffect(() => {
    filter();

    // eslint-disable-next-line
  }, [selectedRegion]);

  return (
    <div>
      <select
        className="select"
        name="select"
        id="select"
        value={regions.name}
        onChange={handleRegionChange}
      >
        {regions.map((region) => (
          <option key={region.name} value={region.name}>
            {region.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilteredRegions;
