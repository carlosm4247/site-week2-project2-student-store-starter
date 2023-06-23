import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
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

  function runSearchButton() {
    console.log(`Running search for ${searchString}`);
    const items = data.products.filter(item => item.name.includes(searchString))
    setCurrentItems(items)
  }

  useEffect(() => {
    const items = data.products;
    setCurrentItems(items);
    setHomeItems(items);
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
              setCurrentItems={setCurrentItems}
              searchTerm={searchString}
              setSearchString={setSearchString}
              />
          </div>
          
        </main>
      </BrowserRouter>
    </div>
  )
}
