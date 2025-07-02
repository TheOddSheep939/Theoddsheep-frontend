import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ShoppingCart, X, Moon, Sun } from "lucide-react";

export default function Navbar({ darkMode, setDarkMode, isLoggedIn }) {
  const { cart, dispatch } = useCart();
  const [showCart, setShowCart] = useState(false);

  const totalItems = cart.items.length;

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const handleClear = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setShowCart(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <header className={`navbar ${darkMode ? "dark" : ""}`}>
        <div className="navbar-content">
          <div className="logo">
            <Link to="/">The Odd Sheep</Link>
          </div>
          <nav>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <Link to="/cart" className="nav-cart-link">View Cart</Link>
              <li><Link to="/contact">Contact</Link></li>
              {isLoggedIn ? (
                <li><Link to="/profile">Profile</Link></li>
              ) : (
                <li><Link to="/login">Login</Link></li>
              )}
              <li>
                <button
                  onClick={() => setShowCart(true)}
                  className="icon-button"
                  aria-label="Open cart"
                >
                  <ShoppingCart size={20} />
                  {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
                </button>
              </li>
              <li>
                <button
                  className="icon-button"
                  onClick={() => setDarkMode(!darkMode)}
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Slide-in Cart Drawer */}
      <aside className={`cart-drawer ${showCart ? "open" : ""}`}>
        <div className="cart-header">
          <h3>Your Cart</h3>
          <button
            className="close-button"
            onClick={() => setShowCart(false)}
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        <div className="cart-body">
          {cart.items.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <ul className="cart-items">
                {cart.items.map((item, index) => (
                  <li key={index} className="cart-item">
                    <img
                      src={item.image || "/placeholder.jpg"}
                      alt={item.name}
                      className="item-thumbnail"
                    />
                    <div className="item-info">
                      <span className="item-name">{item.name}</span>
                      <span className="price">BHD {item.price.toFixed(2)}</span>
                    </div>
                    <button
                      className="remove-item"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <div className="cart-footer">
                <div className="subtotal">
                  <span>Subtotal</span>
                  <span>
                    BHD{" "}
                    {cart.items
                      .reduce((acc, item) => acc + item.price, 0)
                      .toFixed(2)}
                  </span>
                </div>
                <button className="checkout-btn">Checkout</button>
                <button onClick={handleClear} className="clear-cart">
                  Clear Cart
                </button>
              </div>
            </>
          )}
        </div>
      </aside>

      {/* Overlay */}
      {showCart && <div className="cart-overlay" onClick={() => setShowCart(false)} />}
    </>
  );
}
