import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Countries from "./pages/Countries";
import Country from "./pages/Country";
import { useStateContext } from "./context/Context";

const App = () => {
  const { theme } = useStateContext();

  return (
    <div className={theme === "dark" ? "dark" : "light"}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/country/:name" element={<Country />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
