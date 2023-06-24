import * as React from "react";
import { useParams } from "react-router-dom";
import "./ProductView.css";

export default function ProductView({ data }) {
  const { id } = useParams();

  const product = data.products.find((product) => product.id == id);

  return (
    <div className="productView">
      {product ? (
        <>
          <img className="productImage" src={product.image} alt={product.name + " image"} />
          <div className="productName">{product.name}</div>
          <div className="productPrice">${product.price}</div>
          <p className="productDescription">{product.description}</p>
        </>
      ) : (
        <div>Product not found.</div>
      )}
    </div>
  );
}