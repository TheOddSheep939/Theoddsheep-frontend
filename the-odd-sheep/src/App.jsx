import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useCart } from "./context/CartContext";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ShopPage from "./pages/ShopPage";
import ContactPage from "./pages/ContactPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";

// New pages
import ShippingPage from "./pages/ShippingPage";
import ReturnsPage from "./pages/ReturnsPage";
import TrackOrderPage from "./pages/TrackOrderPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import AccessibilityPage from "./pages/AccessibilityPage";
import SustainabilityPage from "./pages/SustainabilityPage";
import InclusionPage from "./pages/InclusionPage";
import BrandStoryPage from "./pages/BrandStoryPage";
import ViewCartPage from "./pages/ViewCartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./styles.css";

function App() {
  const getInitialDarkMode = () => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) return saved === "true";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [darkMode, setDarkMode] = useState(getInitialDarkMode);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { cart } = useCart();

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      const saved = localStorage.getItem("darkMode");
      if (saved === null) {
        setDarkMode(e.matches);
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <Router>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} isLoggedIn={isLoggedIn} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/profile" element={isLoggedIn ? <ProfilePage /> : <LoginPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* New Pages */}
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/returns" element={<ReturnsPage />} />
          <Route path="/track-order" element={<TrackOrderPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="/accessibility" element={<AccessibilityPage />} />
          <Route path="/sustainability" element={<SustainabilityPage />} />
          <Route path="/inclusion" element={<InclusionPage />} />
          <Route path="/brand-story" element={<BrandStoryPage />} />
          <Route path="/cart" element={<ViewCartPage />} />
          <Route path="/checkout" element={Array.isArray(cart?.items) && cart.items.length > 0 ? <CheckoutPage /> : <Navigate to="/cart" />} />
          <Route path="/confirmation" element={<OrderConfirmationPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
