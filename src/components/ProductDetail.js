// Components
import DeleteButton from "./buttons/DeleteButton";
import { useParams, Redirect, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
// Styling
import { DetailWrapper } from "../styles";

const ProductDetail = (props) => {
  const { productSlug } = useParams();
  const product = props.products.find(
    (product) => product.slug === productSlug
  );
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
      <p>{product.price} KD</p>
      <DeleteButton
        productId={product.id}
        deleteProduct={props.deleteProduct}
      />
    </DetailWrapper>
  );
};

export default ProductDetail;
