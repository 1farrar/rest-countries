import { createContext, useState, useEffect, useContext } from "react";

export const useStateContext = () => useContext(ThemeContext);

const ThemeContext = createContext();

const Context = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  console.log(theme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default Context;
