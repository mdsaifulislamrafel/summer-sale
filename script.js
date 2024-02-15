const cards = document.querySelectorAll('.card');
let tittleCount = 1;
let totalPrice = 0;
for (const card of cards) {
    card.addEventListener('click', function () {
        const title = card.querySelector('h3').innerText;

        const price = parseInt(card.querySelector('span').innerText.split(' ')[1]);

        const titleContainer = document.getElementById('title-container');
        const p = document.createElement('p');
        p.innerText = tittleCount + ". " + title;
        titleContainer.appendChild(p);
        tittleCount++;
        const total = document.getElementById('totalPrice');
        totalPrice += price;
        total.innerText = totalPrice;
    });
}


const btn = document.getElementById('apply-btn');
btn.addEventListener('click', function () {
    const inputValue = document.getElementById('input-field').value.split(' ').join('').toUpperCase();
    if (inputValue === 'SELL200') {
        if (totalPrice >= 200) {
            const discountPrice = document.getElementById('discountPrice');
            const discount = totalPrice * 0.2;
            discountPrice.innerText = discount.toFixed(2);
            document.getElementById('total').innerText = totalPrice - discount.toFixed(2);
            document.getElementById('input-field').value = '';

        } else {
            alert('Discount not available by $200');
            document.getElementById('input-field').value = '';
        }
    } else {
        alert('Invalid discount code');
        document.getElementById('input-field').value = '';
    }

});


function congratulation() {
    const opacity = document.getElementById('opacity');
    opacity.classList.add('opacity-75')
    const congratulation = document.getElementById('congratulation');
    congratulation.style.display = 'block';
    
}

function byNow () {
    const opacity = document.getElementById('opacity');
    opacity.classList.remove('opacity-75');
    const congratulation = document.getElementById('congratulation');
    congratulation.style.display = 'none';
}