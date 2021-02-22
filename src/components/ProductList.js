// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

const ProductList = ({ products }) => {
  const [query, setQuery] = useState("");
  const user = useSelector((state) => state.authentication.user);

  if (!user) return <Redirect to="/signin" />;

  const productList = products
    .filter((product) => product)
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => <ProductItem product={product} key={product.id} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{productList}</ListWrapper>
    </div>
  );
};

export default ProductList;
