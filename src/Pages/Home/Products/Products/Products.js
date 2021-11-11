import React, { useState, useEffect } from 'react';
import Porduct from '../Product/Porduct';
import './Products.css'


const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./Products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="container">
            <h1 style={{ textAlign: "center" }}>Our Top Deal</h1>
            <hr />
            <div className="products container">
                {
                    products.map(product => <Porduct
                        key={product.id}
                        product={product}
                    ></Porduct>)
                }
            </div>
        </div>
    );
};

export default Products;