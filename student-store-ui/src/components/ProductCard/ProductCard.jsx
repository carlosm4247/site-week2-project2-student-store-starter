import * as React from "react"
import "./ProductCard.css"
import { Link } from "react-router-dom"


export default function ProductCard({id, image, name, price, addToCart, removeFromCart}) {
  return (
    <div className="productCard">
        <Link key={id} to={`/${id}`}>
          <img src={image} alt={name + " image"}></img>
        </Link>
        

        <div className="productName">{name}</div>

        <div className="productPrice">${price}</div>

        <span>
          <button type="submit" onClick={() => addToCart(id)}> <i className="material-icons">add</i> </button> 
          <button type="submit" onClick={() => removeFromCart(id)}> <i className="material-icons">remove</i> </button> 
        </span>
    </div>
  ) 
}