import { useState } from "react";
import { BackButtonStyled, CreateButtonStyled, ListWrapper } from "../styles";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, updateProduct } from "../store/actions";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
const ProductForm = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const { productSlug } = useParams();
  const productExists = useSelector((state) =>
    state.products.find((product) => product.slug === productSlug)
  );

  const [product, setProduct] = useState(
    productExists ?? {
      name: "",
      price: 0,
      description: "",
      image: "",
    }
  );

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    productExists
      ? dispatch(updateProduct(product))
      : dispatch(createProduct(product));
    history.push("/products");
  };

  const handleImage = (event) =>
    setProduct({ ...product, image: event.target.files[0] });

  return (
    <>
      <Helmet>
        <title>{productExists ? "Update" : "Create"}</title>
      </Helmet>
      <ListWrapper>{productExists ? "Update" : "Create"} Product</ListWrapper>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter product name"
            className="form-control"
            value={product.name}
            onChange={handleChange}
          />
          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              name="price"
              min="1"
              placeholder="Enter product price"
              className="form-control"
              value={product.price}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            name="description"
            placeholder="Enter product description"
            className="form-control"
            value={product.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            type="file"
            name="image"
            placeholder="Enter product image url"
            className="form-control"
            onChange={handleImage}
          />
        </div>
        <CreateButtonStyled onSubmit={handleSubmit}>
          {productExists ? "Update" : "Create"}
        </CreateButtonStyled>
        <Link to="/products">
          <BackButtonStyled>Back</BackButtonStyled>
        </Link>
      </form>
    </>
  );
};

export default ProductForm;
