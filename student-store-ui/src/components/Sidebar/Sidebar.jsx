import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"

export default function Sidebar({openSidebar, sidebarClassName, closeSidebar}) {

  return (
    <div className="sidebar">
      { sidebarClassName === "sidebar" ? 
          (<button type="submit" onClick={openSidebar}><i className="material-icons">arrow_forward</i></button>) 
          : (<div className="openedSidebar">
              <button type="submit" onClick={closeSidebar}><i className="material-icons">arrow_backward</i></button>
              <ShoppingCart />
              <CheckoutForm />
            </div>
            )}
    </div>
  )
}
