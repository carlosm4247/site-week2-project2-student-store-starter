import * as React from "react"
import "./ProductCard.css"

export default function ProductCard({image, name, price}) {
  return (
    <div className="productCard">
        <img src={image} alt={name + " image"}></img>

        <div>{name}</div>

        <div>${price}</div>
    </div>
  ) 
}