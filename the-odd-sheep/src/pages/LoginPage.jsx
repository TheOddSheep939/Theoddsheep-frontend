import React from "react";
import { useGoogleLogin } from "@react-oauth/google";

export default function LoginPage() {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log("Token:", tokenResponse);

      try {
        const response = await fetch("http://localhost:5000/auth/google", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: tokenResponse.access_token }),
        });

        if (!response.ok) {
          throw new Error("Failed to authenticate with backend");
        }

        const data = await response.json();
        console.log("Backend response:", data);

        // Redirect or store login info as needed
        // window.location.href = "/dashboard";
      } catch (error) {
        console.error("Authentication error:", error);
      }
    },
    onError: (err) => {
      console.error("Google login failed:", err);
    },
    flow: "implicit", // Or use "auth-code" if you're exchanging code on the backend
  });

  return (
    <main>
      <h1>Login to The Odd Sheep</h1>
      <button onClick={() => login()}>Login with Google</button>
    </main>
  );
}
