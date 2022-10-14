import React from 'react';
import './Product.css'

const Product = (props) => {
    const {image, title, duration} = props.product;
    return (
        <div className='product'>
            <img src ={image} alt=""></img>
            <p className='product-title'>Tittle: {title}</p >
            <p>Time Required: {duration}</p>
        </div>
    );
};

export default Product;