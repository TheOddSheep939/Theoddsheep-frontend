import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

export default function ProfilePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [address, setAddress] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    axios.get("/auth/me")
      .then((res) => {
        setUser(res.data);
        setAddress(res.data.address || "");
      })
      .catch(() => {
        navigate("/login", { replace: true });
      });
  }, [navigate]);

  const handleSave = (e) => {
    e.preventDefault();
    axios.put("/api/user/profile/address", { address })
      .then((res) => {
        setUser(res.data);
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
      })
      .catch(() => alert("Failed to save address"));
  };

  const logout = () => {
    axios.get("/auth/logout").then(() => {
      navigate("/");
    });
  };

  return (
    <div className="profile-page">
      <header>
        <div className="logo"><a href="/">The Odd Sheep</a></div>
        <button onClick={logout}>Logout</button>
      </header>

      <main>
        <h1>Welcome, {user?.username || "Sheep"}</h1>

        <form className="profile-form" onSubmit={handleSave}>
          <label>Email:</label>
          <input type="email" value={user?.email || ""} disabled />

          <label>Shipping Address:</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your shipping address"
            required
          ></textarea>

          <button type="submit">Save Address</button>
          {saved && <p className="success">Address saved!</p>}
        </form>
      </main>

      <footer>
        <p>&copy; 2025 The Odd Sheep. All rights reserved.</p>
      </footer>
    </div>
  );
}