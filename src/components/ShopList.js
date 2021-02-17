// Styling
import { ListWrapper } from "../styles";
// Components
import ShopItem from "./ShopItem";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useSelector } from "react-redux";
import LoadingShops from "./LoadingShops";

const ShopList = () => {
  const shops = useSelector((state) => state.shops.shops);
  const loading = useSelector((state) => state.shops.loading);
  const [query, setQuery] = useState("");

  if (loading) return <LoadingShops />;

  const shopList = shops
    .filter((shop) => shop.name.toLowerCase().includes(query.toLowerCase()))
    .map((shop) => <ShopItem shop={shop} key={shop.id} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{shopList}</ListWrapper>
    </div>
  );
};

export default ShopList;
