import * as React from "react"
import { useParams } from "react-router-dom"
import "./ProductView.css"

export default function ProductView({data}) {
  const { id } = useParams();

  const product = data.products.find(product => product.id == id);

  return (
    <div className="productView">
      {product ? (
        <>
          <img src={product.image} alt={product.name + " image"} />
          <div>{product.name}</div>
          <div>${product.price}</div>
          <p>{product.description}</p>
        </>
      ) : (
        <div>Product not found.</div>
      )}
    </div>
  );
}