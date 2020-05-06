import { LOAD_PRODUCTS, UPDATE_RATING } from "./actions";

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

      console.warn('reducer', state, action.payload)
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
    default:
      return state;
  }
};