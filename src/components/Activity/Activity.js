import React, { useEffect, useState } from 'react';
import './Activity.css'
import Product from '../Product/Product.js'
import Cart from '../Cart/Cart';
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
        console.log(product)
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='activity-container'>
            <div className="products-container">
                {
                    products.map(product=> <Product key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                {/* {/* <h2>Activity Details</h2>
                <div>
                    <div>
<p>Challenge time: {cart.length}</p>
                    </div>
                    <div>
<p>Break Time:</p>
                    </div>
                </div>
                calculation  */}
                <Cart cart={cart}></Cart>
                </div>
                
        </div>
    );
};

export default Activity;