import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search";

import axios from "axios";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [countrySearch, setCountrySearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((response) => {
      console.log(response);
      setCountries(response.data);
      setIsLoading(false);
    });
  }, []);

  const handleCountrySearch = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setCountrySearch(event.target.value);
    if (countrySearch) {
      setFilteredCountries(
        countries.filter((country) =>
          country.name.toLowerCase().includes(event.target.value.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="app-container">
      <Search
        countries={countries}
        setCountries={setCountries}
        countrySearch={countrySearch}
        handleCountrySearch={handleCountrySearch}
      />
      {isLoading ? (
        <h2 className="loading">Loading...</h2>
      ) : countrySearch.length > 1 ? (
        <section className="countries-con">
          {filteredCountries.map(
            ({ name, population, region, capital, flags, idx }) => (
              <Link to={`/country/${name}`} key={name} className="link-con">
                <section>
                  <div className="image-con">
                    <img className="image" src={flags.png} alt={name} />
                  </div>
                  <div className="details">
                    <h2 className="details-h2">{name}</h2>
                    <h4>
                      Population: <span>{population.toLocaleString()}</span>
                    </h4>
                    <h4>
                      Region: <span>{region}</span>
                    </h4>
                    <h4>
                      Capital: <span>{capital}</span>
                    </h4>
                  </div>
                </section>
              </Link>
            )
          )}
        </section>
      ) : (
        <section className="countries-con">
          {countries.map(
            ({ name, population, region, capital, flags, idx }) => (
              <Link to={`/country/${name}`} key={name} className="link-con">
                <section>
                  <div className="image-con">
                    <img className="image" src={flags.png} alt={name} />
                  </div>
                  <div className="details">
                    <h2 className="details-h2">{name}</h2>
                    <h4>
                      Population: <span>{population.toLocaleString()}</span>
                    </h4>
                    <h4>
                      Region: <span>{region}</span>
                    </h4>
                    <h4>
                      Capital: <span>{capital}</span>
                    </h4>
                  </div>
                </section>
              </Link>
            )
          )}
        </section>
      )}
    </div>
  );
};

export default Countries;
