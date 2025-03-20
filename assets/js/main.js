const sectionBag = document.querySelector('#section-bag');

const yakisobaId = document.querySelector('#yakisoba-id').innerHTML;
const yakisobaAddBag = document.querySelector('#yakisoba-add-bag');

const karagueId = document.querySelector('#karague-id').innerHTML;
const karagueAddBag = document.querySelector('#karague-add-bag');

const executiveId = document.querySelector('#executive-id').innerHTML;
const executiveAddBag = document.querySelector('#executive-add-bag');

const displayBag = document.querySelector('.display-bag');

const adderPrice = document.querySelector('.adder-price');

yakisobaAddBag.addEventListener('click', function(e) {
    const el = e.target;
    const price = el.innerHTML;

    displayYakisoba(yakisobaId, price);
});

karagueAddBag.addEventListener('click', function(e) {
    const el = e.target;
    const price = el.innerHTML;
    
    displayKarague(karagueId, price);
});

executiveAddBag.addEventListener('click', function(e) {
    const el = e.target;
    const price = el.innerHTML;
    
    displayExecutive(executiveId, price);
});

function converterInNumber(value) {
    return parseFloat(value.slice(3, value.length).replace(',', '.'));
}

let liForYakisoba = null;

function createLiForYakisoba() {
    if(!liForYakisoba) {
        liForYakisoba = document.createElement('li');
        liForYakisoba.classList.add('yakisoba-display', 'meal-display');
    }

    return liForYakisoba;
} 

let liForKarague = null;

function createLiForKarague() {
    if(!liForKarague) {
        liForKarague = document.createElement('li');
        liForKarague.classList.add('karague-display', 'meal-display');
    }

    return liForKarague;
} 

let liForExecutive = null;

function createLiForExecutive() {
    if(!liForExecutive) {
        liForExecutive = document.createElement('li');
        liForExecutive.classList.add('executive-display', 'meal-display');
    }

    return liForExecutive;
} 

function createToAddButton() {
    const toAddButton = document.createElement('button');
    toAddButton.classList.add('to-add-button');
    toAddButton.innerHTML = '➕';

    return toAddButton;
}

function createDeleteButton() {
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerHTML = '❌'; 

    return deleteButton;
}

function createToDecreaseButton() {
    const toDecreaseButton = document.createElement('button');
    toDecreaseButton.classList.add('to-decrease-button');
    toDecreaseButton.innerHTML = '➖';
    
    return toDecreaseButton;
}

var counterY = 0;

function displayYakisoba(id, price) {
    price = converterInNumber(price);
    
    counterY++;

    const li = createLiForYakisoba(); 

    const itemContent = `${id}: ${counterY}und. R$ ${(price*counterY).toFixed(2)}`;
    li.textContent = itemContent; 
    
    const toAddButton = createToAddButton();
    const deleteButton = createDeleteButton();
    const toDecreaseButton = createToDecreaseButton();
    
    li.appendChild(toAddButton);
    li.appendChild(deleteButton);
    li.appendChild(toDecreaseButton);
    
    displayBag.appendChild(li);
    
    toAddButton.addEventListener('click', e => {
        displayYakisoba(yakisobaId, yakisobaAddBag.innerHTML);
        
    });
    
    deleteButton.addEventListener('click', e => {
        if(deleteButton.parentElement) {
            deleteButton.parentElement.remove();
        }
        
        const purchaseButton = document.querySelector('.purchase-button');
        if (purchaseButton && !(document.querySelector('.meal-display'))) {
            purchaseButton.remove();
        }
        
        counterY = 0;
        bagPrice();
    });
    
    toDecreaseButton.addEventListener('click', e => {
        counterY--;
        counterY--;
        displayYakisoba(yakisobaId, yakisobaAddBag.innerHTML);
        
        if(counterY <= 0) toDecreaseButton.parentElement.remove(); /* Not working */
    });
    
    bagPrice();
}

var counterK = 0;

function displayKarague(id, price) {
    price = converterInNumber(price);
    
    counterK++;

    const li = createLiForKarague(); 

    const itemContent = `${id}: ${counterK}und. R$ ${(price*counterK).toFixed(2)}`;
    li.textContent = itemContent; 
    
    const toAddButton = createToAddButton();
    const deleteButton = createDeleteButton();
    const toDecreaseButton = createToDecreaseButton();
    
    li.appendChild(toAddButton);
    li.appendChild(deleteButton);
    li.appendChild(toDecreaseButton);
    
    displayBag.appendChild(li);
    
    toAddButton.addEventListener('click', e => {
        displayKarague(karagueId, karagueAddBag.innerHTML);
        
    });
    
    deleteButton.addEventListener('click', e => {
        if(deleteButton.parentElement) {
            deleteButton.parentElement.remove();
        }
        
        const purchaseButton = document.querySelectorAll('.purchase-button');
        if (purchaseButton && !(document.querySelector('.meal-display'))) {
            purchaseButton.remove();
        }
        
        counterK = 0;
        bagPrice();
    });
    
    toDecreaseButton.addEventListener('click', e => {
        counterK--;
        counterK--;
        displayKarague(karagueId, karagueAddBag.innerHTML);
        
        console.log(toDecreaseButton.parentElement);
        if(counterK <= 0) toDecreaseButton.parentElement.remove();
    });
    
    bagPrice();
}

var counterE = 0;

function displayExecutive(id, price) {
    price = converterInNumber(price);
    
    counterE++;

    const li = createLiForExecutive(); 

    const itemContent = `${id}: ${counterE}und. R$ ${(price*counterE).toFixed(2)}`;
    li.textContent = itemContent; 
    
    const toAddButton = createToAddButton();
    const deleteButton = createDeleteButton();
    const toDecreaseButton = createToDecreaseButton();
    
    li.appendChild(toAddButton);
    li.appendChild(deleteButton);
    li.appendChild(toDecreaseButton);
    
    displayBag.appendChild(li);
    
    toAddButton.addEventListener('click', e => {
        displayExecutive(executiveId, executiveAddBag.innerHTML);
        
    });
    
    deleteButton.addEventListener('click', e => {
        if(deleteButton.parentElement) {
            deleteButton.parentElement.remove();
        }
        
        const purchaseButton = document.querySelector('.purchase-button');
        if (purchaseButton && !(document.querySelector('.meal-display'))) {
            purchaseButton.remove();
        }
        
        counterE = 0;
        bagPrice();
    });
    
    toDecreaseButton.addEventListener('click', e => {
        counterE--;
        counterE--;
        displayExecutive(executiveId, executiveAddBag.innerHTML);
        
        console.log(toDecreaseButton.parentElement);
        if(counterE <= 0) toDecreaseButton.parentElement.remove();
    });
    
    bagPrice();
}

function bagPrice() {
    const total = (counterY * converterInNumber(yakisobaAddBag.innerHTML)) + (counterK * converterInNumber(karagueAddBag.innerHTML)) + (counterE * converterInNumber(executiveAddBag.innerHTML));

    if(total > 0) {
        adderPrice.innerHTML = total.toFixed(2);
    } else {
        adderPrice.innerHTML = '00,00';
    }
    
}

[yakisobaAddBag, karagueAddBag, executiveAddBag].forEach(el => {
    el.addEventListener('click', e => {
        if (!document.querySelector('.purchase-button')) {
            const button = document.createElement('button');
            button.classList.add('purchase-button')
            button.innerHTML = 'Ir para o pagamento'
        
            sectionBag.appendChild(button);
        
            button.addEventListener('click', e => {
                alert('Backend required!');
            });
        }
    });  
});

