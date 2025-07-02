import React, { useState } from "react";

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="info-page track-order-page">
      <div className="container">
        <h1 className="track-title">Track Your Order</h1>
        <p className="track-subtitle">Enter your order number below to check its status.</p>

        <form onSubmit={handleSubmit} className="track-order-form">
          <input
            type="text"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            placeholder="Enter Order Number"
            className="track-input"
            required
          />
          <button type="submit" className="track-button">Track</button>
        </form>

        {submitted && (
          <div className="tracking-result">
            <p>📦 Tracking info for <strong>Order #{orderNumber}</strong> is currently unavailable.<br />
            Please <a href="/contact">contact support</a> if you need help.</p>
          </div>
        )}
      </div>
    </div>
  );
}
