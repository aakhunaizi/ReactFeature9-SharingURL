import { useState } from "react";
import { BackButtonStyled, CreateButtonStyled } from "../styles";
import { Link } from "react-router-dom";
const ProductForm = () => {
  const [product, setProduct] = useState({
    productname: "",
    productprice: 0,
    productdescription: "",
    productimage: "",
  });

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(product);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="productname"
            placeholder="Enter product name"
            className="form-control"
            onChange={handleChange}
          />
          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              name="productprice"
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
            name="productdescription"
            placeholder="Enter product description"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            type="text"
            name="productimage"
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
