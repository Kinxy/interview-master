export const LOAD_PRODUCTS = "LOAD_PRODUCTS";
export const UPDATE_RATING = "UPDATE_RATING";

export const loadProducts = () => ({
    type: LOAD_PRODUCTS,
    payload: [
      {
        id: 1,
        title: "Nike Trainers",
        description: "Some Nike trainers you might like to buy",
        rating: 3,
      },
      {
        id: 2,
        title: "Adidas Trainers",
        description: "Some Adidas trainers you might like to buy",
        rating: 3,
      },
      {
        id: 3,
        title: "Puma Trainers",
        description: "Some Puma trainers you might like to buy",
        rating: 3,
      },
      {
        id: 4,
        title: "New Balance Trainers",
        description: "Some New Balance trainers you might like to buy",
        rating: 3,
      }
    ]
  });

export const updateRating = (id, rating) => ({ 
  type: UPDATE_RATING,
  payload: {
    id,
    rating,
  }
});

