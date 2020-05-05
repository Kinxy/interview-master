import React from "react";
import { updateRating, updateRatingHover, removeRatingHover } from "./store/products/actions";
import { useDispatch } from "react-redux";

function Rating({ product }) {
  const dispatch = useDispatch();

  const updateUserRating = (newRating) => dispatch(updateRating(product.id, newRating));
  const updateUserHoverRating = (newRating) => dispatch(updateRatingHover(product.id, newRating));
  const removeUserHoverRating = () => dispatch(removeRatingHover(product.id));

  const generateRating = () => {
    const maxRating = 5;

    let finalRating = [];
    let productRating = (product.ratingHover != null)? product.ratingHover : product.rating; 
    for (let i = 0; i < maxRating; i += 1) {
      finalRating.push(
        <button className={`rating-pip ${i + 1 <= productRating ? "active" : ""}`} 
          onClick={() => updateUserRating(i + 1)} 
          onMouseEnter={() => updateUserHoverRating(i + 1)}
          onMouseLeave={() => removeUserHoverRating()}
        />
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
