import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    
    const {image, title, duration} = props.product;
    return (
        <div className='product'>
            <img src ={image} alt=""></img>
            <div className='product-info'>
            <p className='product-title'>Tittle: {title}</p >
            <p>Time Required: {duration}</p>
            </div>
            <button onClick={()=>props.handleAddToCart(props.product)} className='btn-cart'><p>Add To List</p>
            <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;