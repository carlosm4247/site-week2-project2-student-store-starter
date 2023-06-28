import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import Hero from "../Hero/Hero";
import "./App.css";
import SearchForm from "../SearchForm/SearchForm";
import ProductView from "../ProductView/ProductView"
import { Dataset } from "../../../../student-store-express-api/data/dataset"


export default function App() {

  const data = Dataset.createDataSet();
  const [searchString, setSearchString] = useState("");
  const [homeItems, setHomeItems] = useState([])
  const [currentItems, setCurrentItems] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");
  const [sidebarClassName, setSidebarClassName] = useState("");

  

  function runSearchButton() {
    console.log(`Running search for ${searchString}`);
    const items = data.products.filter(item => item.name.toLowerCase().includes(searchString.toLowerCase()))
    setCurrentItems(items)
    setSearchString("");
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

  function openSidebar() {
    console.log("Sidebar opened");
    setSidebarClassName("sidebar open");
  }

  function closeSidebar() {
    console.log("Sidebar closed")
    setSidebarClassName("sidebar")
  }

  useEffect(() => {
    const items = data.products;
    setCurrentItems(items);
    setHomeItems(items);
    setCurrentCategory("All Categories");
    setSidebarClassName("sidebar");
  }, []);


  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}

          <div className={sidebarClassName}>
            <Sidebar 
              openSidebar={openSidebar}
              closeSidebar={closeSidebar}
              sidebarClassName={sidebarClassName}
            />
          </div>
          
          <div className="page">
            <div className="navbar">
              <Navbar />
            </div>

            <div className="hero">
              <Hero />
            </div>

            <Routes>
              <Route path='/' element={<Home 
                                        currentItems={currentItems}
                                        currentCategory={currentCategory}
                                        setCurrentCategory={setCurrentCategory}
                                        categoryClicked={categoryClicked}
                                        searchString={searchString}
                                        setSearchString={setSearchString}
                                        runSearchButton={runSearchButton}
                                      />}
                />

            <Route path='/:id' element={<ProductView 
                                          data={data}
                                        />} 
                />
            
            </Routes>
            
          </div>
          
        </main>
      </BrowserRouter>
    </div>
  )
}
