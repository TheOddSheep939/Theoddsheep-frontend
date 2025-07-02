import React from "react";

export default function Footer() {
  return (
    <footer className="custom-footer">
      <div className="footer-top">
        <p>*Offer valid online. Prices as marked. Terms apply.</p>
        <a href="/offers">See All Offer Details</a>
      </div>
      <div className="footer-columns">
        <div>
          <h4>Our Vision</h4>
          <ul>
            <li>Built in Bahrain</li>
            <li>Driven by Creativity</li>
            <li>Inspired by the Odd Ones</li>
          </ul>
        </div>
        <div>
          <h4>About Us</h4>
          <ul>
            <li><a href="/brand-story">Brand Story</a></li>
            <li><a href="/sustainability">Sustainability</a></li>
            <li><a href="/inclusion">Inclusion</a></li>
          </ul>
        </div>
        <div>
          <h4>Help</h4>
          <ul>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/shipping">Shipping</a></li>
            <li><a href="/returns">Returns</a></li>
            <li><a href="/track-order">Track Order</a></li>
          </ul>
        </div>
        <div>
          <h4>Subscribe</h4>
          <form className="subscribe-form">
            <input type="email" placeholder="Email Address" />
            <button type="submit">Join</button>
          </form>
          <div className="social-icons">
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <ul>
          <li><a href="/privacy">Privacy</a></li>
          <li><a href="/terms">Terms</a></li>
          <li><a href="/sitemap">Sitemap</a></li>
          <li><a href="/accessibility">Accessibility</a></li>
        </ul>
        <p>&copy; 2025 The Odd Sheep. All rights reserved.</p>
      </div>
    </footer>
  );
}