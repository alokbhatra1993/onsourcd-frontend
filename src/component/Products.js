import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  // Example products data
  const products = [
    {
      id: 1,
      productName: 'Biomass Pellets',
      productImage: 'https://example.com/biomass-pellets.jpg',
      category: 'Raw Materials',
      subcategory: 'Biomass',
    },
    {
      id: 2,
      productName: 'Biofuel Processing Kit',
      productImage: 'https://example.com/biofuel-kit.jpg',
      category: 'Biofuel Manufacturing',
      subcategory: 'Processing Equipment',
    },
    {
      id: 3,
      productName: 'Waste-to-Energy System',
      productImage: 'https://example.com/waste-to-energy.jpg',
      category: 'Energy Solutions',
      subcategory: 'Waste Management',
    },
    // Add more products as needed
  ];

  return (
    <div className="products">
      <div className='justify-content'>
      <h2>Product List</h2>
      <Link to="/admin-dashboard/add-product">Add Product</Link>
      </div>
      

      <table className="product-table">
        <thead>
          <tr>
            <th>Index</th>
            <th>Product Name</th>
            <th>Product Image</th>
            <th>Direct Category</th>
            <th>Product Subcategory</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.productName}</td>
              <td>
                <img src={product.productImage} alt={product.productName} style={{ maxWidth: '100px' }} />
              </td>
              <td>{product.category}</td>
              <td>{product.subcategory}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
