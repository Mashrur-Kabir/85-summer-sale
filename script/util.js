function removeBtnDisable(){
    const purButton = document.getElementById('purchase-btn');
    purButton.removeAttribute('disabled'); // removing disable attribute 
}

function getValue(inputField){
    // getting value
    const valueFromField = document.getElementById(inputField);
    const valueString = valueFromField.innerText;
    const value = parseFloat(valueString);

    /* valueFromField.value = ''; // clearing the input fields if you want */
    return value;
}

// reusable setText function that sends value for showcase
function setElementInnerText(textField, result){ // where to set and what to set
    // finding from DOM by textField's ID and then assigning it. And then setting the *2nd argument* on its innerText for showcasing
    const priceShowcase = document.getElementById(textField);
    priceShowcase.innerText = result;
}

// function to show cart log

function showCartProducts(NameId){
    const cartShowcase = document.getElementById('cart-log');

    const count = cartShowcase.childElementCount;

    const p = document.createElement('p');
    p.classList.add('font-medium', 'mb-2', 'text-xl');
    p.innerHTML = `${count + 1}. ${NameId} <button class="btn btn-sm rounded-full text-white bg-red-400 hover:bg-red-700">-</button>`;

    cartShowcase.appendChild(p);
}

// clearing field after purchase
function clearField(textField, val){
    const field = document.getElementById(textField);
    field.innerText = val;
}