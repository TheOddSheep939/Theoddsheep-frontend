import React from "react";
import { Link } from "react-router-dom";

export default function OrderConfirmationPage() {
  return (
    <main className="confirmation-page">
      <div className="confirmation-content">
        <div className="confirmation-icon" role="img" aria-label="Checkmark">
          ✅
        </div>
        <h1>Thank you for your order!</h1>
        <p>Your order has been placed successfully.</p>
        <p>You’ll receive a confirmation email shortly.</p>
        <Link to="/shop" className="btn continue-btn">Continue Shopping</Link>
      </div>
    </main>
  );
}
