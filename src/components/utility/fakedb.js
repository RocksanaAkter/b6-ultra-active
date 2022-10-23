const addToDb = time => 
{
    let shoppingCart ; 

    const storedCart = localStorage.getItem('Break Time');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);

    }
    else{
        shoppingCart = {};
    }

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

export {addToDb}

