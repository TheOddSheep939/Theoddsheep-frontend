import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [address, setAddress] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/", { replace: true });

    // Example payload (in a real app you'd decode JWT or fetch user data)
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
    setAddress(storedUser?.address || "");
  }, [navigate]);

  const handleSave = (e) => {
    e.preventDefault();
    const updatedUser = { ...user, address };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="profile-page">
      <header>
        <div className="logo"><a href="/">The Odd Sheep</a></div>
      </header>

      <main>
        <h1>Welcome, {user?.name || "Sheep"}</h1>

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
