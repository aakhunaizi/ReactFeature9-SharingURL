import { useParams, Redirect, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
// Styling
import { DetailWrapper } from "../styles";
import ProductList from "./ProductList";
import CreateShopButton from "./buttons/CreateShopButton";

const ShopDetail = () => {
  const { shopSlug } = useParams();
  const allProducts = useSelector((state) => state.products.products);
  const shop = useSelector((state) =>
    state.shops.shops.find((_shop) => _shop.slug === shopSlug)
  );

  const products = shop.products.map((product) =>
    allProducts.find((_product) => _product.id === product.id)
  );
  if (!shop) return <Redirect to="/shops" />;
  return (
    <DetailWrapper>
      <Helmet>
        <title>{shop.name}</title>
      </Helmet>
      <Link to="/shops">Back to Shops</Link>
      <h1 style={{ marginBottom: "2%", marginLeft: "3%" }}>{shop.name}</h1>
      <img
        src={shop.image}
        alt={shop.name}
        style={{
          borderRadius: "50%",
          border: "2px solid transparent",
          width: "20%",
        }}
      />

      <ProductList products={products} />
      <Link to={`/shops/${shop.id}/products/new`}>
        <CreateShopButton />
      </Link>
    </DetailWrapper>
  );
};

export default ShopDetail;
