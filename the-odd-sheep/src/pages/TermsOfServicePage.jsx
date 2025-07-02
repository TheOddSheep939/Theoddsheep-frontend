import React from "react";

export default function TermsOfServicePage() {
  return (
    <div className="info-page terms-page">
      <h1>Terms of Service</h1>
      <p>
        By accessing or using The Odd Sheep website, you agree to the following terms and conditions. Please read them
        carefully.
      </p>

      <section>
        <h2>1. Use of Our Site</h2>
        <p>
          This site is for your personal, non-commercial use. Automated tools (like bots or scrapers) and any form of
          resale without prior permission are strictly prohibited.
        </p>
      </section>

      <section>
        <h2>2. Orders & Payments</h2>
        <p>
          We reserve the right to cancel or refuse any order at our discretion—including, but not limited to, cases
          involving pricing errors, suspicious activity, or potential fraud.
        </p>
      </section>

      <section>
        <h2>3. Intellectual Property</h2>
        <p>
          All content on this site—including designs, logos, images, text, and graphics—is the exclusive property of
          The Odd Sheep. Use without written permission is not allowed.
        </p>
      </section>

      <section>
        <h2>4. Modifications</h2>
        <p>
          We may update these terms from time to time. Continued use of the site after changes means you accept the
          revised terms.
        </p>
      </section>

      <section>
        <h2>5. Contact</h2>
        <p>
          Have questions? Reach out at{" "}
          <a href="mailto:support@oddsheep.com">support@oddsheep.com</a>.
        </p>
      </section>
    </div>
  );
}
