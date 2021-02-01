import { useState } from "react";
import { BackButtonStyled, CreateButtonStyled } from "../styles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createProduct } from "../store/actions";
import { useHistory } from "react-router-dom";
const ProductForm = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
  });

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createProduct(product));
    history.push("/products");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter product name"
            className="form-control"
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
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            type="text"
            name="image"
            placeholder="Enter product image url"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <CreateButtonStyled onSubmit={handleSubmit}>Create</CreateButtonStyled>
        <Link to="/products">
          <BackButtonStyled>Back</BackButtonStyled>
        </Link>
      </form>
    </>
  );
};

export default ProductForm;
