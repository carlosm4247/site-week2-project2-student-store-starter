import * as React from "react"
import "./ProductCard.css"
import { Link } from "react-router-dom"


export default function ProductCard({id, image, name, price}) {
  return (
    <div className="productCard">
        <Link key={id} to={`/${id}`}>
          <img src={image} alt={name + " image"}></img>
        </Link>
        

        <div>{name}</div>

        <div>${price}</div>
    </div>
  ) 
}