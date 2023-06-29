import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"

export default function Sidebar({openSidebar, sidebarClassName, closeSidebar, cartedItems, displayCartedItem, tax, total}) {

  return (
    <div className="sidebar">
      { sidebarClassName === "sidebarCont" ? 
          (<button type="submit" onClick={openSidebar}><i className="material-icons">arrow_forward</i></button>) 
          : (<div className="openedSidebar">
              <button type="submit" onClick={closeSidebar}><i className="material-icons">arrow_backward</i></button>
              <ShoppingCart 
                cartedItems={cartedItems}
                displayCartedItem={displayCartedItem}
                tax={tax}
                total={total}
              />
              <CheckoutForm />
            </div>
            )}
    </div>
  )
}
