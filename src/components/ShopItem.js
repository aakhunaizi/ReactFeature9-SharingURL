// Components
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
// Styling
import { ListWrapper, ProductWrapper } from "../styles";

const ShopItem = ({ shop }) => {
  return (
    <ProductWrapper>
      <Helmet>
        <title>Shops</title>
      </Helmet>
      <Link to={`/shops/${shop.slug}`}>
        <img alt={shop.name} src={shop.image} />
      </Link>
      <ListWrapper>{shop.name}</ListWrapper>
    </ProductWrapper>
  );
};

export default ShopItem;
