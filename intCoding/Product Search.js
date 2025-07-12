import  { useState } from 'react';

const ProductList = () => {
  const [search, setSearch] = useState('');

  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mouse" },
    { id: 3, name: "Keyboard" },
    { id: 4, name: "Monitor" },
    { id: 5, name: "Speaker" }
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Product Search</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))
        ) : (
          <li>No matching products</li>
        )}
      </ul>
    </div>
  );
};

export default ProductList;