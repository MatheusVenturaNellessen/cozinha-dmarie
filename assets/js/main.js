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
        liForYakisoba.classList.add('yakisoba-display');
    }

    return liForYakisoba;
} 

let liForKarague = null;

function createLiForKarague() {
    if(!liForKarague) {
        liForKarague = document.createElement('li');
        liForKarague.classList.add('karague-display');
    }

    return liForKarague;
} 

let liForExecutive = null;

function createLiForExecutive() {
    if(!liForExecutive) {
        liForExecutive = document.createElement('li');
        liForExecutive.classList.add('executive-display');
    }

    return liForExecutive;
} 

function createImg() {
    const img = document.createElement('img');
    img.src = '../img/trash-icon.png';
    img.alt = 'ícone de um lixo';

    return img;
}

function createDeleteButton() {
    const deleteButton = document.createElement('button');
    img = createImg();
    deleteButton.appendChild(img); 
    return deleteButton;
}

var counterY = 0;

function displayYakisoba(id, price) {
    price = converterInNumber(price);
    
    counterY += 1;

    const li = createLiForYakisoba();    
    li.innerHTML = `${id}: ${counterY}und. R$ ${(price*counterY).toFixed(2)}`;
    displayBag.appendChild(li);
    
    const deleteButton = createDeleteButton();
    li.appendChild(deleteButton);

    deleteButton.addEventListener('click', e => {
        deleteButton.parentElement.remove();

        counterY = 0;
        bagPrice();
    });

    bagPrice();
}

var counterK = 0;

function displayKarague(id, price) {
    price = converterInNumber(price);
    
    counterK += 1;

    const li = createLiForKarague();    
    li.innerHTML = `${id}: ${counterK}und. R$ ${(price*counterK).toFixed(2)}`;
    displayBag.appendChild(li);
    
    const deleteButton = createDeleteButton();
    li.appendChild(deleteButton);

    deleteButton.addEventListener('click', e => {
        deleteButton.parentElement.remove();

        counterK = 0;
        bagPrice();
    });

    bagPrice();
}

var counterE = 0;

function displayExecutive(id, price) {
    price = converterInNumber(price);
    
    counterE += 1;

    const li = createLiForExecutive();    
    li.innerHTML = `${id}: ${counterE}und. R$ ${(price*counterE).toFixed(2)}`;
    displayBag.appendChild(li);
    
    const deleteButton = createDeleteButton();
    li.appendChild(deleteButton);

    deleteButton.addEventListener('click', e => {
        deleteButton.parentElement.remove();

        counterE = 0;
        bagPrice();
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
    }, { once: true });  
});

