import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
const Country = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    axios.get(`https://restcountries.com/v2/name/${name}`).then((response) => {
      setCountry(response.data);
    });
  }, [name]);

  return (
    <div className="app-container">
      <Link to="/" className="back-btn">
        <BsArrowLeft />
        Back Home
      </Link>

      {country.map(
        ({
          name,
          flags,
          nativeName,
          population,
          region,
          subregion,
          capital,
          topLevelDomain,
          currencies,
          languages,
          borders,
          idx,
        }) => (
          <section className="country-block" key={capital}>
            <img className="country-image" src={flags.png} alt={name} />
            <div className="country-block-info">
              <h2>{name}</h2>
              <div className="details-block">
                <ul className="details-block-one" key={currencies}>
                  <li>
                    <span>Native Name:</span> {nativeName}
                  </li>
                  <li>
                    <span>Population:</span> {population.toLocaleString()}
                  </li>
                  <li>
                    <span>Region:</span> {region}
                  </li>
                  <li>
                    <span>Sub Region:</span> {subregion}
                  </li>
                  <li>
                    <span>Capital:</span> {capital}
                  </li>
                </ul>
                <ul className="details-block-two" key={currencies}>
                  <li>
                    <span>Top Level Domain:</span> {topLevelDomain}
                  </li>
                  <li>
                    <span>Currencies:</span> {currencies[0].name}
                  </li>
                  <li>
                    <span>Languages:</span> {languages[0].name}
                  </li>
                </ul>
              </div>
              <div className="border-countries">
                <p className="border-countries-title">Border Countries:</p>
                {borders?.map((border) => (
                  <Link to="" className="border-country" key={border}>
                    {border}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )
      )}
    </div>
  );
};

export default Country;
