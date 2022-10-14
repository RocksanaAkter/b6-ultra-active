import React, { useEffect, useState } from 'react';
import './Activity.css'
import Product from '../Product/Product.js'
const Activity = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json()
        .then(data=>setProducts(data)))
    },
    []);
    return (
        <div className='activity-container'>
            <div className="products-container">
                {
                    products.map(product=> <Product key={product.id}
                    product={product}></Product>)
                }
            </div>
            <div className="cart-container">calculation</div>
        </div>
    );
};

export default Activity;