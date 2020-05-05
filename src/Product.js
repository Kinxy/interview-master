import React from "react";
import Rating from "./Rating";

function Product({ product }) {
  return (
    <div className="product" id={product.id}>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <Rating product={product} />
    </div>
  );
}

export default Product;