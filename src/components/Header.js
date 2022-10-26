import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

import { useStateContext } from "../context/Context";

const Header = () => {
  const { theme, toggleTheme } = useStateContext();

  return (
    <div className="header-container">
      <div className="header-nav">
        <h2>Where in the world?</h2>
        <div className="header-toggle" onClick={toggleTheme}>
          {theme === "light" && (
            <>
              <FaMoon /> <span>Dark Mode</span>
            </>
          )}
          {theme === "dark" && (
            <>
              <FaSun /> <span>Light Mode</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
