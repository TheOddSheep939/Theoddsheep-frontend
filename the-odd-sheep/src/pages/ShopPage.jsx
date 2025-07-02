// src/pages/ShopPage.jsx
import React from "react";
import ProductCard from "../components/ProductCard";

export default function ShopPage() {
  const products = [
    {
      id: 1,
      name: "Deadpan Tee",
      price: 10.0,
      image: "/assets/images/sheep-deadpan.png",
    },
    {
      id: 2,
      name: "Dystopia Hoodie",
      price: 18.0,
      image: "/assets/images/sheep-dystopia.png",
    },
  ];

  return (
    <div className="shop-page">
      <main>
        <h1>Shop</h1>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <footer>
        <p>&copy; 2025 The Odd Sheep. All rights reserved.</p>
      </footer>
    </div>
  );
}
