import React from 'react';
import './Break.css'

const Break = ({handleBreak}) => {
    return (
        <div className='break'>
            <button onClick={()=> handleBreak(10)}>10</button>
            <button onClick={()=> handleBreak(20)}>20</button>
            <button onClick={()=> handleBreak(30)}>30</button>
            <button onClick={()=> handleBreak(40)}>40</button>
            <button onClick={()=> handleBreak(50)}>50</button>      
            </div>
            
    );
};

export default Break;