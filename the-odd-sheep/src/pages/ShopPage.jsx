import React from "react";

export default function ShopPage() {
  return (
    <div className="shop-page">
      <header>
        <div className="logo"><a href="/">The Odd Sheep</a></div>
      </header>

      <main>
        <h1>Shop</h1>
        <div className="product-grid">
          <div className="product-card">
            <img src="/assets/images/sheep-deadpan.png" alt="Deadpan Tee" />
            <h3>Deadpan Tee</h3>
            <p>BHD 10.00</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="/assets/images/sheep-dystopia.png" alt="Dystopia Hoodie" />
            <h3>Dystopia Hoodie</h3>
            <p>BHD 18.00</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </main>

      <footer>
        <p>&copy; 2025 The Odd Sheep. All rights reserved.</p>
      </footer>
    </div>
  );
}
