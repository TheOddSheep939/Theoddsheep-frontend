// src/pages/HomePage.jsx
import React from "react";

export default function HomePage() {
  return (
    <div>
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

      {/* Login Modal */}
      <div className="modal-overlay" id="loginModal">
        <div className="modal-content">
          <span
            className="close-btn"
            onClick={() => document.getElementById("loginModal").classList.remove("show")}
          >
            &times;
          </span>
          <h2>Login to The Odd Sheep</h2>
          <form id="loginForm">
            <input type="text" id="username" placeholder="Username" required />
            <input type="password" id="password" placeholder="Password" required />
            <button type="submit">Login</button>
            <p id="loginMessage"></p>
          </form>
          <hr />
          <button
            onClick={() => window.location.href = "http://localhost:5000/auth/google"}
            className="google-login-btn"
          >
            Sign in with Google
          </button>
        </div>
      </div>

      {/* Signup Modal */}
      <div className="modal-overlay" id="signupModal">
        <div className="modal-content">
          <span
            className="close-btn"
            onClick={() => document.getElementById("signupModal").classList.remove("show")}
          >
            &times;
          </span>
          <h2>Create an Account</h2>
          <form id="signupForm">
            <input type="text" id="signupUsername" placeholder="Username" required />
            <input type="email" id="signupEmail" placeholder="Email" required />
            <input type="password" id="signupPassword" placeholder="Password" required />
            <button type="submit">Sign Up</button>
            <p id="signupMessage"></p>
          </form>
          <hr />
          <button
            onClick={() => window.location.href = "http://localhost:5000/auth/google"}
            className="google-login-btn"
          >
            Sign up with Google
          </button>
        </div>
      </div>
    </div>
  );
}
