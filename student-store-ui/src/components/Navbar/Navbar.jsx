import * as React from "react"
import "./Navbar.css"
import Header from "../Header/Header"
import Logo from "../Logo/Logo"

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <Header />
    </nav>
  )
}
