import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { CartProvider } from "./context/CartContext"; // ✅ import CartProvider
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <GoogleOAuthProvider clientId="389146714601-gpnrhr7vcgir4og2jt2nupe4j6jh9iho.apps.googleusercontent.com">
    <CartProvider> {/* ✅ wrap App */}
      <App />
    </CartProvider>
  </GoogleOAuthProvider>
);
