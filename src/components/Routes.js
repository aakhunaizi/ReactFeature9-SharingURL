import { Route, Switch } from "react-router";
import { useSelector } from "react-redux";
import Home from "./Home";
import ProductDetail from "./ProductDetail";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import ShopList from "./ShopList";
import ShopDetail from "./ShopDetail";
import Signup from "./SignupForm";
import LoadingScreen from "./Loading";

const Routes = () => {
  const products = useSelector((state) => state.products.products);
  const shops = useSelector((state) => state.shops.shops);
  const loadingProducts = useSelector((state) => state.products.loading);
  const loadingShops = useSelector((state) => state.shops.loading);

  if (loadingProducts || loadingShops) return <LoadingScreen />;

  return (
    <Switch>
      <Route path={"/signup"}>
        <Signup />
      </Route>
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
        <ShopList shops={shops} />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
