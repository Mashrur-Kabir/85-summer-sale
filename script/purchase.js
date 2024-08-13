// Adding to cart total:

document.getElementById('add6').addEventListener('click', function(){    
    removeBtnDisable();

    const prodPrice = getValue('cap-price'); 
    const prevTotalPrice = getValue('totalPrice'); 

    const totalPrice = prodPrice + prevTotalPrice;

    setElementInnerText('totalPrice', totalPrice.toFixed(2)); // where to set and what to set
    setElementInnerText('finalPrice', totalPrice.toFixed(2)); // where to set and what to set

    showCartProducts('Sports Black Cap');

});

document.getElementById('add5').addEventListener('click', function(){    
    removeBtnDisable();

    const prodPrice = getValue('shoe-price'); 
    const prevTotalPrice = getValue('totalPrice'); 

    const totalPrice = prodPrice + prevTotalPrice;

    setElementInnerText('totalPrice', totalPrice.toFixed(2)); // where to set and what to set
    setElementInnerText('finalPrice', totalPrice.toFixed(2)); // where to set and what to set

    showCartProducts('Sports Cates');
});

document.getElementById('add4').addEventListener('click', function(){    
    removeBtnDisable();

    const prodPrice = getValue('jersey-price'); 
    const prevTotalPrice = getValue('totalPrice'); 

    const totalPrice = prodPrice + prevTotalPrice;

    setElementInnerText('totalPrice', totalPrice.toFixed(2)); // where to set and what to set
    setElementInnerText('finalPrice', totalPrice.toFixed(2)); // where to set and what to set

    showCartProducts('Sports Jersey');
});

document.getElementById('add3').addEventListener('click', function(){    
    removeBtnDisable();

    const prodPrice = getValue('cooker-price'); 
    const prevTotalPrice = getValue('totalPrice'); 

    const totalPrice = prodPrice + prevTotalPrice;

    setElementInnerText('totalPrice', totalPrice.toFixed(2)); // where to set and what to set
    setElementInnerText('finalPrice', totalPrice.toFixed(2)); // where to set and what to set

    showCartProducts('Home Cooker');
});

document.getElementById('add2').addEventListener('click', function(){    
    removeBtnDisable();

    const prodPrice = getValue('board-price'); 
    const prevTotalPrice = getValue('totalPrice'); 

    const totalPrice = prodPrice + prevTotalPrice;

    setElementInnerText('totalPrice', totalPrice.toFixed(2)); // where to set and what to set
    setElementInnerText('finalPrice', totalPrice.toFixed(2)); // where to set and what to set

    showCartProducts('Chopping Board Set');
});

document.getElementById('add1').addEventListener('click', function(){    
    removeBtnDisable();

    const prodPrice = getValue('spoon-price'); 
    const prevTotalPrice = getValue('totalPrice'); 

    const totalPrice = prodPrice + prevTotalPrice;

    setElementInnerText('totalPrice', totalPrice.toFixed(2)); // where to set and what to set
    setElementInnerText('finalPrice', totalPrice.toFixed(2)); // where to set and what to set

    showCartProducts('Wooden Spoon Set');
});

// Make Purchase button:

document.getElementById('purchase-btn').addEventListener('click', function (){

});