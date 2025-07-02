import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const { cart, totalPrice, dispatch } = useCart();
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    country: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting order:", { ...form, cart });
    dispatch({ type: "CLEAR_CART" });
    navigate("/confirmation");
  };

  if (!cart.items || cart.items.length === 0) {
    return (
      <main className="checkout-page">
        <h1>Checkout</h1>
        <p>Your cart is empty. <Link to="/shop">Shop now</Link>.</p>
      </main>
    );
  }

  return (
    <main className="checkout-page">
      <h1 className="checkout-title">Checkout</h1>
      <form onSubmit={handleSubmit} className="checkout-form">
        {/* Shipping Info */}
        <section className="checkout-section">
          <h2>Shipping Information</h2>
          <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} required />
          <input type="text" name="address" placeholder="Street Address" value={form.address} onChange={handleChange} required />
          <div className="form-row">
            <input type="text" name="city" placeholder="City" value={form.city} onChange={handleChange} required />
            <input type="text" name="zip" placeholder="ZIP Code" value={form.zip} onChange={handleChange} required />
          </div>
          <select name="country" value={form.country} onChange={handleChange} required>
            <option value="">Select Country</option>
            <option value="US">United States</option>
            <option value="BH">Bahrain</option>
            <option value="UK">United Kingdom</option>
            <option value="IN">India</option>
            <option value="CA">Canada</option>
            <option value="AU">Australia</option>
          </select>
        </section>

        {/* Payment Info */}
        <section className="checkout-section">
          <h2>Payment Details</h2>
          <input type="text" name="cardNumber" placeholder="Card Number" value={form.cardNumber} onChange={handleChange} required />
          <div className="form-row">
            <input type="text" name="expiry" placeholder="MM/YY" value={form.expiry} onChange={handleChange} required />
            <input type="text" name="cvv" placeholder="CVV" value={form.cvv} onChange={handleChange} required />
          </div>
        </section>

        {/* Summary */}
        <section className="checkout-summary">
          <h2>Order Summary</h2>
          <ul>
            {cart.items.map(item => (
              <li key={item.id}>
                {item.name} × {item.quantity} = <strong>${(item.price * item.quantity).toFixed(2)}</strong>
              </li>
            ))}
          </ul>
          <p className="total">Total: <strong>${totalPrice.toFixed(2)}</strong></p>
        </section>

        <button type="submit" className="checkout-submit">Place Order</button>
      </form>
    </main>
  );
}
