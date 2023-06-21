import * as React from "react"
import { BrowserRouter } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"

export default function App() {
  
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

            <Home />
          </div>
          
        </main>
      </BrowserRouter>
    </div>
  )
}
