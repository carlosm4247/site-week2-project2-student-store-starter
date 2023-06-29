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
  const [cartedItems, setCartedItems] = useState({});
  const [total, setTotal] = useState(0.0);
  const [tax, setTax] = useState(0.0);

  

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
    setSidebarClassName("sidebarCont open");
  }

  function closeSidebar() {
    console.log("Sidebar closed")
    setSidebarClassName("sidebarCont")
  }

  function addToCart(id) {
    if (cartedItems[id]) {
      cartedItems[id] += 1;
    }
    else {
      cartedItems[id] = 1;
    }

    const item = data.products.find(item => item.id == id);

    setTax(tax + (item.price * 0.0725))
    setTotal(total + item.price + (item.price * 0.0725))
    setCartedItems(cartedItems);
    console.log(cartedItems);
  }

  function removeFromCart(id) {

    const item = data.products.find(item => item.id == id);

    if (cartedItems[id]) {
      setTax(tax - (item.price * 0.0725))
      setTotal(total - item.price - (item.price * 0.0725))
    }
    
    if (cartedItems[id] === 1) {
      delete cartedItems[id]
    }
    else if (cartedItems[id]) {
      cartedItems[id] -= 1;
    }

    setCartedItems(cartedItems);
    console.log(cartedItems);
  }

  function displayCartedItem(id) {
    const item = data.products.find(item => item.id == id);

    const name = item.name
    const quantity = cartedItems[id]
    const subtotal = (item.price * quantity).toFixed(2)
    const tax = (subtotal * 0.0725).toFixed(2)
    const total = (Number(subtotal) + Number(tax)).toFixed(2)

    const item_details = [name, quantity, subtotal]

    return item_details.join(" ")
  }

  useEffect(() => {
    const items = data.products;
    setCurrentItems(items);
    setHomeItems(items);
    setCurrentCategory("All Categories");
    setSidebarClassName("sidebarCont");
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
              cartedItems={cartedItems}
              displayCartedItem={displayCartedItem}
              total={total}
              tax={tax}
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
                                        addToCart={addToCart}
                                        removeFromCart={removeFromCart}
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
