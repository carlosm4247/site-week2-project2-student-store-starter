import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Routes } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import Hero from "../Hero/Hero";
import "./App.css";
import SearchForm from "../SearchForm/SearchForm";
import { Dataset } from "../../../../student-store-express-api/data/dataset"


export default function App() {

  const data = Dataset.createDataSet();
  const [searchString, setSearchString] = useState("");
  const [homeItems, setHomeItems] = useState([])
  const [currentItems, setCurrentItems] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentProduct, setCurrentProduct] = useState("");

  function runSearchButton() {
    console.log(`Running search for ${searchString}`);
    const items = data.products.filter(item => item.name.toLowerCase().includes(searchString.toLowerCase()))
    setCurrentItems(items)
  }

  function categoryClicked(category) {
    console.log(category)
    if (category === "All Categories") {
      setCurrentItems(homeItems);
    }
    else {
      const items = data.products.filter(item => item.category.toLowerCase() === category.toLowerCase())
      setCurrentItems(items)
    }
    
    setCurrentCategory(category);
  }

  useEffect(() => {
    const items = data.products;
    setCurrentItems(items);
    setHomeItems(items);
    setCurrentCategory("All Categories");
  }, []);


  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}

          <div className="sidebar">
            <Sidebar />
          </div>
          
          <div className="page">
            <div className="navbar">
              <Navbar />
            </div>

            <div className="hero">
              <Hero />
            </div>

            <div className="search">
              <SearchForm 
                searchString={searchString}
                setSearchString={setSearchString}
                runSearch={runSearchButton}
                />
            </div>

            <Home 
              currentItems={currentItems}
              currentCategory={currentCategory}
              setCurrentCategory={setCurrentCategory}
              categoryClicked={categoryClicked}
              />
          </div>
          
        </main>
      </BrowserRouter>
    </div>
  )
}
