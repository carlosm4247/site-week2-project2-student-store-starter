import "./CheckoutForm.css";
import React, { useEffect, useState } from 'react';

export default function CheckoutForm({ cartedItems, displayCartedItem, tax, total, clearCart, setTotal, setTax }) {

  const [showReceipt, setShowReceipt] = useState(0);
  const [receiptItems, setReceiptItems] = useState([]);
  const [currTax, setCurrTax] = useState(0.0);
  const [currTotal, setCurrTotal] = useState(0.0);

  const handleCheckout = () => {
    if (Object.keys(cartedItems).length > 0) {
      setShowReceipt(2);

      

      const items = Object.keys(cartedItems).map((id) => {
        const item_details = displayCartedItem(id); 
        return item_details && {
          id,
          name: item_details[0],
          quantity: item_details[1],
          price: item_details[2]
        };
      });

      setCurrTax(tax)
      setCurrTotal(total)
      setReceiptItems(items);

      clearCart();
      setTax(0.0);
      setTotal(0.0);
    } else {
      setShowReceipt(1);
    }
  };

  return (
    <div className="checkoutForm">
      <button onClick={handleCheckout}>Checkout</button>

      {showReceipt === 2 ? (
        <>
          <div>Receipt:</div>
          {receiptItems.map(({ id, name, quantity, price }) => (
            <li key={id}>
              {quantity} total {name} purchased for a total price of ${price}
            </li>
          ))}
          <li>The taxes on the items total ${currTax.toFixed(2)}</li>
          <li>The total for this order is ${currTotal.toFixed(2)}</li>
        </>
      ) : showReceipt === 1 ? (
        <div>No items in cart, please add items to be able to checkout.</div>
      ) : null}
    </div>
  );
}
