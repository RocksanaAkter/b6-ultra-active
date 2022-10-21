import React, { useState } from 'react';
import Break from '../Break/Break';
import Person from '../Person/Person';
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
}

const calc= total+ bellTime;
    return (
        <div className='cart'>
            <div className='person-info'>
                <Person></Person>
            </div>
            <div>
                <h3>Add A Break</h3>
                <Break handleBreak={handleBreak}></Break>
            </div>
            <h3>Activity Details</h3>
                <div>
                    <div className='time'>
                        <p className='cart-text'>Challenge time: {total} minute</p>
                    </div>
                    <div className='time'>
                        <p className='cart-text'>Break Time: {bellTime}</p>
                    </div>
                </div>
               <div><h3>Total Challenge Time: {calc}</h3></div>
         </div>
    
    );
};

export default Cart;