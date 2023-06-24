import * as React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div className="header">
      <Link key="home" to={`/`}>
        <span>Home</span>
      </Link>
        
        <span>About Us</span>
        <span>Contact Us</span>
        <span>Buy Now</span>
    </div>
  )
}