import React from "react";
import { GoogleLogin } from "@react-oauth/google";

export default function LoginPage() {
  return (
    <main>
      <h1>Login to The Odd Sheep</h1>
      <GoogleLogin
        onSuccess={() => {
          window.location.href = "http://localhost:5000/auth/google";
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </main>
  );
}
