import React, { useEffect, useState } from 'react';
import './Activity.css'
import Product from '../Product/Product.js'
import Cart from '../Cart/Cart';
import Question from '../Question/Question';

const Activity = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json()
        .then(data=>setProducts(data)))
    },
    []);

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);

    }
    
    return (
        <div>
            <div className='activity-container'>
            <div className="products-container">
                {
                    products.map(product=> <Product key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                  <Cart cart={cart}></Cart>
             </div>
                
            </div>
        <div>
            <Question></Question>
        </div>
        </div>

    );
};

export default Activity;