// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useSelector } from "react-redux";
import LoadingScreen from "./Loading";

const ProductList = ({ products }) => {
  const loading = useSelector((state) => state.products.loading);
  const [query, setQuery] = useState("");

  if (loading) return <LoadingScreen />;

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
