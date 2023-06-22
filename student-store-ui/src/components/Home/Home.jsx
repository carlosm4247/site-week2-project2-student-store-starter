import * as React from "react"
import "./Home.css"
import Categories from "../Categories/Categories"
import ProductGrid from "../ProductGrid/ProductGrid"

export default function Home() {
  return (
    <div className="home">
      <Categories />

      <ProductGrid />
    </div>
  )
}
