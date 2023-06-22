import * as React from "react"
import "./Home.css"
import Categories from "../Categories/Categories"
import ProductGrid from "../ProductGrid/ProductGrid"
import About from "../About/About"
import Footer from "../Footer/Footer"

export default function Home() {
  return (
    <div className="home">
      <Categories />

      <ProductGrid />

      <About />

      <Footer />

    </div>
  )
}
