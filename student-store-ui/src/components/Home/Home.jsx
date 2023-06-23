import * as React from "react"
import "./Home.css"
import Categories from "../Categories/Categories"
import ProductGrid from "../ProductGrid/ProductGrid"
import About from "../About/About"
import Footer from "../Footer/Footer"
import SearchForm from "../SearchForm/SearchForm";



export default function Home({currentItems, currentCategory, categoryClicked}) {
  
  
  return (
    <div className="home">

      <Categories 
        currentCategory={currentCategory}
        categoryClicked={categoryClicked}
      />
      
      <ProductGrid 
        currentItems={currentItems}
      />
      
      <About />

      <Footer />
    </div>
  )
}
