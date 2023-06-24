import * as React from "react"
import "./Home.css"
import Categories from "../Categories/Categories"
import ProductGrid from "../ProductGrid/ProductGrid"
import About from "../About/About"
import Footer from "../Footer/Footer"
import SearchForm from "../SearchForm/SearchForm";



export default function Home({currentItems, currentCategory, categoryClicked, searchString, setSearchString, runSearchButton}) {
  
  
  return (
    <div className="home">

      <div className="subNavBar">

        <Categories 
          currentCategory={currentCategory}
          categoryClicked={categoryClicked}
        />

        <div className="search">
          <SearchForm 
                searchString={searchString}
                setSearchString={setSearchString}
                runSearch={runSearchButton}
          />
        </div>

      </div>

      



      <h2>Best Selling Products</h2>
      
      <ProductGrid 
        currentItems={currentItems}
      />
      
      <About />

      <Footer />
    </div>
  )
}
