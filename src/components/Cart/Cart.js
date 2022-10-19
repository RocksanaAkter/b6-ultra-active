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
                    <div className='challenge-time'>
                        <p>Challenge time: {total} minute</p>
                    </div>
                    <div>
                        <p>Break Time: {bellTime}</p>
                    </div>
                </div>
                calculation
         </div>
    
    );
};

export default Cart;