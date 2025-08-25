import React from 'react';

function ProductComponent({ product }) {
  return (
    <div>
      <h3>Electronic Product Details</h3>
      <p><strong>Name:</strong> {product.name}</p>
      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Price:</strong> ₹{product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Brand:</strong> {product.price > 50000 ? "Premium Product" : "Budget Product"}</p>
      <p><strong>Warranty:</strong> {product.warranty > 0 ? `${product.warranty} years` : "No Warranty"}</p>
      <p>{product.availability ? "✅ In Stock" : "❌ Out of Stock"}</p>
      <p>{product.category === "Laptop" ? "🎒 Free Laptop Bag Offer" : ""}</p>
    </div>
  );
}

export default ProductComponent;
