import * as React from "react"
import "./ProductGrid.css"
import { Dataset } from "../../../../student-store-express-api/data/dataset"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductGrid({currentItems}) {

  const data = Dataset.createDataSet();

  return (
    <div className="productGrid">
      {currentItems.length > 0 ? (
        currentItems.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))
      ) : (
        <div>No items found.</div>
      )}
    </div>
  )
}