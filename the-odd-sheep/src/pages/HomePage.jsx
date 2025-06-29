import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const profileLink = document.getElementById("profileLink");
    if (profileLink) {
      profileLink.style.display = token ? "inline-block" : "none";
    }
  }, []);

  return (
    <div>
      <header>
        <div className="logo">The Odd Sheep</div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a id="profileLink" href="/profile" style={{ display: "none" }}>Profile</a></li>
            <li><button className="login-btn" onClick={() => document.getElementById("loginModal").classList.add("show")}>Login</button></li>
            <li><button className="signup-btn" onClick={() => document.getElementById("signupModal").classList.add("show")}>Sign Up</button></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Laugh Loud. Dress Dark.</h1>
          <p>Not your average sheep. Explore tees & hoodies with bite.</p>
        </section>

        <section className="intro">
          <h2>Featured Products</h2>
          <div className="product-grid">
            <div className="product-card">
              <img src="assets/images/sheep-deadpan.png" alt="Deadpan Sheep Tee" />
              <h3>Deadpan Sheep Tee</h3>
              <p>BHD 10.00</p>
              <button>Add to Cart</button>
            </div>
            <div className="product-card">
              <img src="assets/images/sheep-dystopia.png" alt="Dystopia Hoodie" />
              <h3>Dystopia Hoodie</h3>
              <p>BHD 18.00</p>
              <button>Add to Cart</button>
            </div>
          </div>
        </section>
      </main>

      {/* 🔐 Login Modal */}
      <div className="modal-overlay" id="loginModal">
        <div className="modal-content">
          <span className="close-btn" onClick={() => document.getElementById("loginModal").classList.remove("show")}>&times;</span>
          <h2>Login to The Odd Sheep</h2>
          <form id="loginForm">
            <input type="text" id="username" placeholder="Username" required />
            <input type="password" id="password" placeholder="Password" required />
            <button type="submit">Login</button>
            <p id="loginMessage"></p>
          </form>
          <hr />
          <button onClick={() => window.location.href = "http://localhost:5000/auth/google"} className="google-login-btn">
            Sign in with Google
          </button>
        </div>
      </div>

      {/* 📝 Sign-Up Modal */}
      <div className="modal-overlay" id="signupModal">
        <div className="modal-content">
          <span className="close-btn" onClick={() => document.getElementById("signupModal").classList.remove("show")}>&times;</span>
          <h2>Create an Account</h2>
          <form id="signupForm">
            <input type="text" id="signupUsername" placeholder="Username" required />
            <input type="email" id="signupEmail" placeholder="Email" required />
            <input type="password" id="signupPassword" placeholder="Password" required />
            <button type="submit">Sign Up</button>
            <p id="signupMessage"></p>
          </form>
          <hr />
          <button onClick={() => window.location.href = "http://localhost:5000/auth/google"} className="google-login-btn">
            Sign up with Google
          </button>
        </div>
      </div>

      <footer className="custom-footer">
        <div className="footer-top">
          <p>*Offer valid online. Prices as marked. Terms apply.</p>
          <a href="#">See All Offer Details</a>
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
              <li><a href="#">Brand Story</a></li>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">Inclusion</a></li>
            </ul>
          </div>
          <div>
            <h4>Help</h4>
            <ul>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Track Order</a></li>
            </ul>
          </div>
          <div>
            <h4>Subscribe</h4>
            <form className="subscribe-form">
              <input type="email" placeholder="Email Address" />
              <button type="submit">Join</button>
            </form>
            <div className="social-icons">
              <a href="#">TikTok</a>
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">YouTube</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <ul>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">Accessibility</a></li>
          </ul>
          <p>&copy; 2025 The Odd Sheep. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
