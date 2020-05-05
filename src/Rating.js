import React from "react";
import { updateRating } from "./store/products/actions";
import { useDispatch } from "react-redux";

function Rating({ product }) {
  const dispatch = useDispatch();

  const updateUserRating = (newRating) => dispatch(updateRating(product.id, newRating));

  const generateRating = () => {
    const maxRating = 5;

    let finalRating = [];

    for (let i = 0; i < maxRating; i += 1) {
      finalRating.push(
        <button className={`rating-pip ${i + 1 <= product.rating ? "active" : ""}`} onClick={() => updateUserRating(i + 1)} />
      );
    }
    return finalRating;
  };

  return (
    <div className="rating">
      Rating: {generateRating()}
    </div>
  )
}

export default Rating;
