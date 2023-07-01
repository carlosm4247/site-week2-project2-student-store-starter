import * as React from "react"
import "./ShoppingCart.css"

export default function ShoppingCart({cartedItems, displayCartedItem, tax, total}) {

  return (
    <div className="shoppingCart">
        <p>Shopping Cart</p>

        {
          Object.keys(cartedItems).length > 0 ? (

            <>

            {Object.keys(cartedItems).map( (id) => 
            (<div key={id}>
              {displayCartedItem(id).join(" ")}
            </div>))}

            <div>{tax.toFixed(2)}</div>

            <div>{total.toFixed(2)}</div>

            </>
            
          ) : (<div>No items in cart</div>)
        }
    </div>
  )
}