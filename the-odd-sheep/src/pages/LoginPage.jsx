import React, { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";

export default function LoginPage() {
  const [formMode, setFormMode] = useState("login"); // 'login' or 'register'
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const response = await fetch("http://localhost:5000/auth/google", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token: tokenResponse.access_token }),
        });

        if (!response.ok) throw new Error("Failed to authenticate with backend");

        const data = await response.json();
        console.log("Backend Google auth:", data);
        // Redirect or store token, e.g., localStorage.setItem("user", JSON.stringify(data))
      } catch (err) {
        console.error("Google auth error:", err);
        setError("Google authentication failed.");
      }
    },
    onError: (err) => {
      console.error("Google login failed:", err);
      setError("Google login failed.");
    },
    flow: "implicit", // Change to "auth-code" if using backend exchange
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const endpoint =
      formMode === "login" ? "/auth/login" : "/auth/register";

    try {
      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error("Authentication failed.");

      const data = await response.json();
      console.log(`${formMode} success:`, data);

      // Store user/session as needed
    } catch (err) {
      console.error("Form error:", err);
      setError("Authentication failed. Please check your credentials.");
    }
  };

  return (
    <main className="auth-container">
      <h1>{formMode === "login" ? "Login" : "Create Account"}</h1>

      <button onClick={() => googleLogin()} className="google-btn">
        Continue with Google
      </button>

      <div className="divider">or</div>

      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete={
            formMode === "login" ? "current-password" : "new-password"
          }
        />

        {error && <p className="auth-error">{error}</p>}

        <button type="submit" className="submit-btn">
          {formMode === "login" ? "Login" : "Sign Up"}
        </button>

        <p className="toggle-auth">
          {formMode === "login" ? (
            <>
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => setFormMode("register")}
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setFormMode("login")}
              >
                Login
              </button>
            </>
          )}
        </p>
      </form>
    </main>
  );
}
