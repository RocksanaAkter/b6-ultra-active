const addToDb = time => 
{
    let shoppingCart = {} ; 

    getStoredCart();
    // const storedCart = localStorage.getItem('Break Time');
    // if(storedCart){
    //     shoppingCart = JSON.parse(storedCart);
    // }
    

    const quality = shoppingCart[time];
    if(quality){
        const newQuality = quality + 1;
        shoppingCart[time] = newQuality;
    }
    else{
        shoppingCart[time] = 1;
    }

    localStorage.setItem('Break Time', JSON.stringify(shoppingCart));

    
}

const getStoredCart = () =>{
    let shoppingCart = {} ; 
    const storedCart = localStorage.getItem('Break Time');
if(storedCart){
    shoppingCart = JSON.parse(storedCart);
}

return shoppingCart;
}
export {addToDb, getStoredCart}

