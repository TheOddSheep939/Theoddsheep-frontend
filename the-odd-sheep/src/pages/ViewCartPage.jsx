import React from "react";
import { useCart } from "../context/CartContext"; // adjust path if needed
import { Link } from "react-router-dom";

export default function ViewCartPage() {
  const { cart, dispatch, totalPrice } = useCart();
  const cartItems = cart.items || [];

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      dispatch({ type: "REMOVE_FROM_CART", payload: id });
    } else {
      const item = cartItems.find((item) => item.id === id);
      if (item && quantity > item.quantity) {
        dispatch({ type: "INCREMENT", payload: id });
      } else if (item && quantity < item.quantity) {
        dispatch({ type: "DECREMENT", payload: id });
      }
    }
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  return (
    <main className="cart-page">
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/shop">Start shopping</Link>.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h2>{item.name}</h2>
                  <p>${item.price.toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity === 1}
                    >−</button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >+</button>
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-summary">
            <h2>Total: ${totalPrice.toFixed(2)}</h2>
            <Link to="/checkout" className="checkout-btn">Proceed to Checkout</Link>
          </div>
        </>
      )}
    </main>
  );
}
