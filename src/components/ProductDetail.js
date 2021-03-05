// Components
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";
import { useParams, Redirect, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
// Styling
import { DetailWrapper } from "../styles";

const ProductDetail = () => {
  const products = useSelector((state) => state.products.products);
  const productSlug = useParams().productSlug;

  const product = products.find((product) => product.slug === productSlug);
  if (!product) return <Redirect to="/products" />;
  return (
    <DetailWrapper>
      <Helmet>
        <title>{product.name}</title>
      </Helmet>
      <Link to="/products">Back to Products</Link>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price} BD</p>
      <DeleteButton productId={product.id} />
      <UpdateButton className="float-right" productSlug={product.slug} />
    </DetailWrapper>
  );
};

export default ProductDetail;
