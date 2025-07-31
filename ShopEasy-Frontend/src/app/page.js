'use client';
import { useEffect, useState } from 'react';

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/products')
            .then(res => res.json())
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="container mt-4">
            <h1>ShopEasy Product Catalog</h1>
            <div className="row">
                <p>Loading products...</p>
            </div>
        </div>
    );
}