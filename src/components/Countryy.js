// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Api_Key } from "../api";

// const Countryyy = ({ name, capital, population, languages, flagUrl }) => {
//   const [weather, setWeather] = useState([]);

//   useEffect(() => {
//     axios
//       .get(
//         `https://api.weatherstack.com/current?access_key=${Api_Key}&query=${capital}`
//       )
//       .then((response) => console.log(response.data));
//   }, [capital]);

//   return (
//     <div>
//       <h1>{name}</h1>
//       <p>capital {capital}</p>
//       <p>population {population}</p>
//       <h3>languages</h3>
//       <ul>
//         {Object.entries(languages).map((language, index) => (
//           <li key={index}>{language[1]}</li>
//         ))}
//       </ul>
//       <img src={flagUrl} alt="No flag found" height="250" width="350" />
//     </div>
//   );
// };

// export default Countryyy;
