import React from 'react';
import Person from '../Person/Person';
import './Cart.css'


const Cart = (props) => {
const {cart} = props;
let total = 0;
for(const product of cart){
    total = total + product.duration;
}

    return (
        <div className='cart'>
            <div className='person-info'>
                <Person></Person>

            </div>
            <div>
                <h3>Add A Break</h3>

            </div>
            <h3>Activity Details</h3>
                <div>
                    <div>
                        <p>Challenge time: {total} minute</p>
                    </div>
                    <div>
                        <p>Break Time:</p>
                    </div>
                </div>
                calculation
         </div>
    
    );
};

export default Cart;