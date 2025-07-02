import React from "react";

export default function ReturnsPage() {
  return (
    <div className="info-page returns-page">
      <div className="container">
        <h1 className="returns-title">Returns & Exchanges</h1>
        <p className="returns-intro">
          We want you to love your Odd Sheep order. If something’s off, here’s how to fix it.
        </p>

        <section className="returns-section">
          <h2>Return Policy</h2>
          <ul>
            <li>Items can be returned within <strong>30 days</strong> of delivery.</li>
            <li>Must be unworn, unwashed, and in original packaging.</li>
            <li><em>Final sale</em> items are not eligible for return.</li>
          </ul>
        </section>

        <section className="returns-section">
          <h2>How to Start a Return</h2>
          <p>
            Visit our <a href="/contact">contact page</a> or email <a href="mailto:support@oddsheep.com">support@oddsheep.com</a> to initiate a return.
          </p>
        </section>

        <section className="returns-section">
          <h2>Refunds</h2>
          <p>
            Refunds are processed within <strong>5–7 business days</strong> of receiving the return.
          </p>
        </section>

        <section className="returns-section">
          <h2>Exchanges</h2>
          <p>
            Need a different size or color? <a href="/contact">Contact us</a> to arrange a quick exchange.
          </p>
        </section>
      </div>
    </div>
  );
}
