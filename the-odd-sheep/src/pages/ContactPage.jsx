import React from "react";

export default function ContactPage() {
  return (
    <div className="contact-page">
      <header>
        <div className="logo"><a href="/">The Odd Sheep</a></div>
      </header>

      <main>
        <h1>Contact Us</h1>
        <p>Have a question, issue, or just want to say hi? Drop us a message below.</p>

        <form className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send</button>
        </form>
      </main>

      <footer>
        <p>&copy; 2025 The Odd Sheep. All rights reserved.</p>
      </footer>
    </div>
  );
}
