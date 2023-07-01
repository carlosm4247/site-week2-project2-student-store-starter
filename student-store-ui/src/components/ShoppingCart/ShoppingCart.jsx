import * as React from "react"
import "./ShoppingCart.css"

export default function ShoppingCart({cartedItems, displayCartedItem, tax, total}) {

  return (
    <div className="shoppingCart">
        <p>Shopping Cart</p>

        {
          Object.keys(cartedItems).length > 0 ? (
            <>
              <table>
                <thead>
                  <tr>
                    <th>Item Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(cartedItems).map((id) => {
                    const item = displayCartedItem(id);
                    const name = item[0]
                    const quantity = item[1]
                    const subtotal = item[2]
                    return (
                      <tr key={id}>
                        <td>{name}</td>
                        <td>{quantity}</td>
                        <td>${subtotal}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <div>Tax: ${tax.toFixed(2)}</div>
              <div>Total: ${total.toFixed(2)}</div>
            </>
          ) : (
            <div>No items in cart</div>
          )
        }
    </div>
  )
}
