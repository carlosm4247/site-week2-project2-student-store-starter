import * as React from "react"
import "./ProductGrid.css"
import { Dataset } from "../../../../student-store-express-api/data/dataset"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductGrid() {

  const data = Dataset.createDataSet();

  console.log(data.products);

  return (
    <div className="productGrid">
      {
        data.products.map( (item) => {
          return <ProductCard 
            key = {item.id}
            image = {item.image}
            name = {item.name}
            price = {item.price}
            />
        })
      }
    </div>
  )
}