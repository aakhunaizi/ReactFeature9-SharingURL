// Styling
import { GlobalStyle } from "./styles";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
// Components
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";
import { ThemeProvider } from "styled-components";
import { Route, Switch } from "react-router";
import ProductForm from "./components/ProductForm";
import ShopList from "./components/ShopList";
import { useSelector } from "react-redux";
import ShopDetail from "./components/ShopDetail";

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
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  const products = useSelector((state) => state.products.products);

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <Helmet>
        <title>Cookies and Beyond</title>
      </Helmet>
      <GlobalStyle />
      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
      <Switch>
        <Route
          path={["/shops/:shopId/products/new", "/products/:productSlug/edit"]}
        >
          <ProductForm />
        </Route>
        <Route path="/products/:productSlug">
          <ProductDetail />
        </Route>
        <Route path="/products">
          <ProductList products={products} />
        </Route>
        <Route path="/shops/:shopSlug">
          <ShopDetail />
        </Route>
        <Route path="/shops">
          <ShopList />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
