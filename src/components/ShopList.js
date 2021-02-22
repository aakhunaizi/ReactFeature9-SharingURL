// Styling
import { ListWrapper } from "../styles";
// Components
import ShopItem from "./ShopItem";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

const ShopList = ({ shops }) => {
  const [query, setQuery] = useState("");
  const user = useSelector((state) => state.authentication.user);

  if (!user) return <Redirect to="signin" />;

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
