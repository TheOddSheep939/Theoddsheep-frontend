import React from "react";

export default function AccessibilityPage() {
  return (
    <div className="info-page accessibility-page">
      <h1>Accessibility</h1>
      <p>
        Everyone deserves to experience Odd Sheep without barriers. We're committed to making our site and services accessible to all, including individuals with disabilities.
      </p>

      <section>
        <h2>Our Commitment</h2>
        <p>
          We aim to meet or exceed Web Content Accessibility Guidelines (WCAG) 2.1 standards. Our team regularly audits the site and implements improvements to ensure usability across devices, screen readers, and input methods.
        </p>
      </section>

      <section>
        <h2>Need Help?</h2>
        <p>
          If you're having trouble using our website or accessing any content, we want to know. Please reach out to us at{" "}
          <a href="mailto:support@oddsheep.com">support@oddsheep.com</a> and we’ll assist you promptly.
        </p>
      </section>

      <section>
        <h2>Ongoing Efforts</h2>
        <p>
          Accessibility isn’t a one-time fix—it’s an ongoing process. We’re actively learning, listening, and adapting to build an experience that works for everyone.
        </p>
      </section>
    </div>
  );
}
