import productsData from "../products";

const initialState = {
  products: productsData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.productId
        ),
      };

    case "CREATE_PRODUCT":
      action.payload.newProduct.id = state.products[state.products.length - 1];
      return {
        ...state,
        products: [...state.products, action.payload.newProduct],
      };

    default:
      return state;
  }
};

export default reducer;
