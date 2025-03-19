const yakisobaId = document.querySelector("#yakisoba-id").innerHTML;
const yakisobaPrice = document.querySelector("#yakisoba-price");

const karagueId = document.querySelector("#karague-id").innerHTML;
const karaguePrice = document.querySelector("#karague-price");

const executiveId = document.querySelector("#executive-id").innerHTML;
const executivePrice = document.querySelector("#executive-price");

const displayBag = document.querySelector(".display-bag");

const counterBag = document.querySelector(".counter-bag");


yakisobaPrice.addEventListener('click', function(e) {
    const el = e.target;
    const price = el.innerHTML;
    
    display(yakisobaId, price);
    bagPrice(price);
});

karaguePrice.addEventListener('click', function(e) {
    const el = e.target;
    const price = el.innerHTML;
    
    display(karagueId, price);
    bagPrice(price);
});

executivePrice.addEventListener('click', function(e) {
    const el = e.target;
    const price = el.innerHTML;
    
    display(executiveId, price);
    bagPrice(price);
});

function display(id, price) {
    const li = document.createElement('li');
    li.innerHTML = `${id}: <span>${price}</span>`;

    displayBag.appendChild(li);
}

let counter = 0;

function bagPrice(price) {
    const converter = price.slice(3, price.length).replace(',', '.');
    const priceInNumber = parseFloat(converter);
    
    counter += priceInNumber;
    
    counterBag.innerHTML = counter;
}
