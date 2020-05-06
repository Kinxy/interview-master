import React, { useState } from "react";
import { updateRating } from "./store/products/actions";
import { useDispatch } from "react-redux";

function Rating({ product }) {
  const dispatch = useDispatch();
  const [hoverRating, setHoverRating] = useState(product.rating);

  const updateUserRating = (newRating) => dispatch(updateRating(product.id, newRating));
  
  const generateRating = () => {
    const maxRating = 5;
    let finalRating = [];

    for (let i = 0; i < maxRating; i += 1) {
      finalRating.push(
        <button key={`rating-${i+1}`} className={`rating-pip ${i + 1 <= hoverRating ? "active" : ""}`} 
          onClick={ () => updateUserRating(i + 1) } 
          onMouseEnter={ () => setHoverRating(i + 1) }
          onMouseLeave={ () => setHoverRating(product.rating) }
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
