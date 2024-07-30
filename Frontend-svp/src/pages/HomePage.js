import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../components/Product';

const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/products/');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <div className="product-list">
                {products.length === 0 ? (
                    <p>No products found.</p>
                ) : (
                    products.map(product => (
                        <Product key={product.id} product={product} />
                    ))
                )}
            </div>
        </div>
    );
};

export default HomePage;
