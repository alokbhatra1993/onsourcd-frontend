import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProductApi } from '../services/api';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await fetchProductApi();
      if (response ) {
        const data = await response.json()
        // console.log("data",data);

        setProducts(data?.products);
      }
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };

  return (
    <div className="products">
      <div className="justify-content">
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
            <tr key={product._id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>
                <img src={product.image} alt={product.name} style={{ maxWidth: '100px' }} />
              </td>
              <td>{product?.category?.name}</td>
              <td>{product?.subCategory?.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
