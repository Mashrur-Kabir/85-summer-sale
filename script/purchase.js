// Adding to cart total:

document.getElementById('add6').addEventListener('click', function () {
    removeBtnDisable();

    const prodPrice = getValue('cap-price');
    const prevTotalPrice = getValue('totalPrice');

    const totalPrice = prodPrice + prevTotalPrice;

    setElementInnerText('totalPrice', totalPrice.toFixed(2)); // where to set and what to set
    setElementInnerText('finalPrice', totalPrice.toFixed(2)); // where to set and what to set

    showCartProducts('Sports Black Cap');

});

document.getElementById('add5').addEventListener('click', function () {
    removeBtnDisable();

    const prodPrice = getValue('shoe-price');
    const prevTotalPrice = getValue('totalPrice');

    const totalPrice = prodPrice + prevTotalPrice;

    setElementInnerText('totalPrice', totalPrice.toFixed(2)); // where to set and what to set
    setElementInnerText('finalPrice', totalPrice.toFixed(2)); // where to set and what to set

    showCartProducts('Sports Cates');
});

document.getElementById('add4').addEventListener('click', function () {
    removeBtnDisable();

    const prodPrice = getValue('jersey-price');
    const prevTotalPrice = getValue('totalPrice');

    const totalPrice = prodPrice + prevTotalPrice;

    setElementInnerText('totalPrice', totalPrice.toFixed(2)); // where to set and what to set
    setElementInnerText('finalPrice', totalPrice.toFixed(2)); // where to set and what to set

    showCartProducts('Sports Jersey');
});

document.getElementById('add3').addEventListener('click', function () {
    removeBtnDisable();

    const prodPrice = getValue('cooker-price');
    const prevTotalPrice = getValue('totalPrice');

    const totalPrice = prodPrice + prevTotalPrice;

    setElementInnerText('totalPrice', totalPrice.toFixed(2)); // where to set and what to set
    setElementInnerText('finalPrice', totalPrice.toFixed(2)); // where to set and what to set

    showCartProducts('Home Cooker');
});

document.getElementById('add2').addEventListener('click', function () {
    removeBtnDisable();

    const prodPrice = getValue('board-price');
    const prevTotalPrice = getValue('totalPrice');

    const totalPrice = prodPrice + prevTotalPrice;

    setElementInnerText('totalPrice', totalPrice.toFixed(2)); // where to set and what to set
    setElementInnerText('finalPrice', totalPrice.toFixed(2)); // where to set and what to set

    showCartProducts('Chopping Board Set');
});

document.getElementById('add1').addEventListener('click', function () {
    removeBtnDisable();

    const prodPrice = getValue('spoon-price');
    const prevTotalPrice = getValue('totalPrice');

    const totalPrice = prodPrice + prevTotalPrice;

    setElementInnerText('totalPrice', totalPrice.toFixed(2)); // where to set and what to set
    setElementInnerText('finalPrice', totalPrice.toFixed(2)); // where to set and what to set

    showCartProducts('Wooden Spoon Set');
});

// Apply code button:

// if the total price is greater than or equal to $200, enable the coupon field and apply button.
document.getElementById('couponField').addEventListener('keyup', function (event) {
    const code = event.target.value; //getting whats written via keyup event from the coupon code field real-time 

    const btnDisabled = document.getElementById('apply-btn');
    const prevTotalPrice = getValue('totalPrice'); //calling it repeatedly because the value might be different than it was in the last time. So its IMPORTANT

    if (code === 'SELL200' && prevTotalPrice >= 200) {
        btnDisabled.removeAttribute('disabled');
    } else {
        btnDisabled.setAttribute('disabled', true);
    }
});

// After enabling the Apply button:

document.getElementById('apply-btn').addEventListener('click', function () {
    const prevTotalPrice = getValue('totalPrice');
    const prevFinalTotalPrice = getValue('finalPrice');

    // discount calculation
    const discountedTotal = prevTotalPrice * 0.2; // 20% discount
    const newFinalTotal = prevFinalTotalPrice - discountedTotal; // finalTotal is the one the final price after the discount. before the finalTotal was equal to total since there was no discount

    // you should not call discountPrice here. we are giving discount on the overall total price. people might add more products after the discount has been calculated.

    setElementInnerText('discountPrice', discountedTotal.toFixed(2)); // where to set and what to set
    setElementInnerText('finalPrice', newFinalTotal.toFixed(2)); // where to set and what to set

    const emptying = document.getElementById('couponField');
    emptying.value = '';
});

// Close button:

document.getElementById('close-btn').addEventListener('click', function () {
    clearField('totalPrice', '0.00');
    clearField('discountPrice', '0.00');
    clearField('finalPrice', '0.00');
    clearField('cart-log', '');
});