import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="info-page privacy-policy-page">
      <h1>Privacy Policy</h1>
      <p>
        Your privacy matters to us. At Odd Sheep, we're committed to handling your data with care, clarity, and respect.
      </p>

      <section>
        <h2>What We Collect</h2>
        <ul>
          <li><strong>Personal Info:</strong> Name, email, shipping address</li>
          <li><strong>Order Details:</strong> Purchase history and preferences</li>
          <li><strong>Usage Data:</strong> How you interact with our site (via cookies or analytics tools)</li>
        </ul>
      </section>

      <section>
        <h2>How We Use It</h2>
        <ul>
          <li>To process and ship your orders</li>
          <li>To provide support and improve our services</li>
          <li>To send product updates or promotions (only with your consent)</li>
        </ul>
      </section>

      <section>
        <h2>Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal data at any time. Just email us at{" "}
          <a href="mailto:privacy@oddsheep.com">privacy@oddsheep.com</a> and we’ll take care of it.
        </p>
      </section>

      <section>
        <h2>Protecting Your Info</h2>
        <p>
          We use industry-standard security measures to protect your data. Payment details are handled securely through trusted providers.
        </p>
      </section>

      <section>
        <h2>Policy Updates</h2>
        <p>
          We may update this policy to reflect changes in the law or our services. If anything significant changes, we’ll let you know.
        </p>
      </section>
    </div>
  );
}
