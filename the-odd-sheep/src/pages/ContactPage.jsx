import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);

    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="contact-page">
      <main>
        <h1>Get in Touch</h1>
        <p>
          Questions? Suggestions? Existential dread? We’re here for all of it.
          Just drop us a line.
        </p>

        {submitted ? (
          <div className="thank-you-message" style={{ marginTop: "2rem" }}>
            <h2>Thanks for reaching out! 🐑</h2>
            <p>We’ll get back to you as soon as the sheep finish typing.</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name (or Alias)"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email (we won’t spam)"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Unleash your message..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Into the Void</button>
          </form>
        )}
      </main>
    </div>
  );
}
