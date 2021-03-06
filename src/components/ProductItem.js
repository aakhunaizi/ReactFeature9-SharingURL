// Components
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";
import { Link } from "react-router-dom";

// Styling
import { ProductWrapper } from "../styles";

const ProductItem = (props) => {
  const product = props.product;

  return (
    <ProductWrapper>
      <Link to={`/products/${product.slug}`}>
        <img alt={product.name} src={product.image} />
      </Link>

      <p>{product.name}</p>
      <p className="product-price">{product.price} BD</p>
      <DeleteButton productId={product.id}> </DeleteButton>
      <UpdateButton productSlug={product.slug} />
    </ProductWrapper>
  );
};

export default ProductItem;
