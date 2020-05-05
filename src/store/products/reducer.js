import { LOAD_PRODUCTS, UPDATE_RATING, UPDATE_RATING_HOVER, REMOVE_RATING_HOVER } from "./actions";

export const products = (
  state = {
    list: []
  },
  action
) => {
  switch (action.type) {
    case LOAD_PRODUCTS: {
      return { list: action.payload };
    }
    case UPDATE_RATING: {
      const productId = action.payload.id;
      const userRating = action.payload.rating;
      return {
        ...state,
        list: state.list.map(product => {
          if (product.id !== productId) {
            return product;
          }
          else return {
            ...product,
            rating: userRating,
          }
        })
      };
    }
    case UPDATE_RATING_HOVER: {
      const productId = action.payload.id;
      const userRating = action.payload.rating;
      return {
        ...state,
        list: state.list.map(product => {
          if (product.id !== productId) {
            return product;
          }
          else return {
            ...product,
            ratingHover: userRating,
          }
        })
      };
    }
    case REMOVE_RATING_HOVER: {
      const productId = action.payload.id;
      return {
        ...state,
        list: state.list.map(product => {
          if (product.id !== productId) {
            return product;
          }
          else return {
            ...product,
            ratingHover: undefined,
          }
        })
      }
    }
    default:
      return state;
  }
};