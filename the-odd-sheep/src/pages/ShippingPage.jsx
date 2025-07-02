import React from "react";

export default function ShippingPage() {
  return (
    <div className="info-page shipping-page">
      <h1>Shipping & Delivery</h1>
      <p className="subtitle">
        We work hard to get your Odd Sheep finds to you fast, safe, and with minimal hassle.
      </p>

      <section>
        <h2>Domestic Shipping</h2>
        <ul>
          <li><strong>Standard:</strong> 3–5 business days <em>(Free on orders $50+)</em></li>
          <li><strong>Express:</strong> 1–2 business days</li>
          <li><strong>Same-Day:</strong> Available in select cities (Bahrain & GCC)</li>
        </ul>
        <p className="note">Orders placed before 2 PM local time ship same day (when eligible).</p>
      </section>

      <section>
        <h2>International Shipping</h2>
        <ul>
          <li><strong>Standard:</strong> 7–14 business days, depending on region</li>
          <li><strong>Duties & Taxes:</strong> May apply upon delivery</li>
        </ul>
        <p>
          We currently ship to over 20 countries, and we’re expanding. If your region isn’t listed, drop us a note —
          we’ll try to make it happen.
        </p>
      </section>

      <section>
        <h2>Order Tracking</h2>
        <p>
          As soon as your order ships, we’ll send you a tracking link by email. You can also
          <a href="/track"> track your order here</a>.
        </p>
      </section>

      <section>
        <h2>Need Help?</h2>
        <p>
          Questions about shipping? Reach out to <a href="/contact">our team</a> — we’re here to help.
        </p>
      </section>
    </div>
  );
}
