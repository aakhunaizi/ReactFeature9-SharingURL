// Styling
import { GlobalStyle } from "./styles";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import NavBar from "./components/NavBar";
// Components
import { ThemeProvider } from "styled-components";
import Routes from "./components/Routes";

// Data

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.theme || "light"
  );

  const toggleTheme = () =>
    setCurrentTheme(localStorage.theme === "light" ? "dark" : "light");

  localStorage.setItem("theme", currentTheme);

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <Helmet>
        <title>Cookies and Beyond</title>
      </Helmet>
      <GlobalStyle />
      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
