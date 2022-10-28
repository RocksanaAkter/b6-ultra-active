import React, { useEffect, useState } from 'react';
import Break from '../Break/Break';
import Person from '../Person/Person';
import { addToDb, getStoredCart } from '../utility/fakedb';
import './Cart.css'

const Cart = (props) => {
const {cart} = props;
let total = 0;
for(const product of cart){
    total = total + product.duration;
}
const [bellTime, setBreakTime]=useState(0);


const handleBreak = (breakTime) =>{
    setBreakTime(breakTime);
    addToDb(breakTime);
}

const calc= total+ bellTime;
    return (
        <div className='cart'>
            <div className='cart-info'>
                <Person></Person>
            </div>
            <div>
                <h3 className='cart-heading'>Add A Break</h3>
                <Break handleBreak={handleBreak}></Break>
            </div>
            <h3 className='cart-heading'>Activity Details</h3>
                <div>
                    <div className='cart-info'>
                        <p className='cart-text'>Challenge time: {total} minute</p>
                    </div>
                    <div className='cart-info'>
                        <p className='cart-text'>Break Time: {bellTime}</p>
                    </div>
                </div>
               <div><h3 className='cart-heading'>Total Time: {calc} minutes</h3></div>
         </div>
    
    );
};

export default Cart;