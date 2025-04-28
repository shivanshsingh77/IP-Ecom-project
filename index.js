const cartToggleBtn = document.querySelector('.cart-toggle');
const cartPopup = document.querySelector('.cart-popup');
const overlay = document.querySelector('.overlay');
const closeCartBtn = document.querySelector('.close-cart');

cartToggleBtn.addEventListener('click', () => {
    cartPopup.classList.toggle('active');
    overlay.classList.toggle('active');
});

closeCartBtn.addEventListener('click', () => {
    cartPopup.classList.remove('active');
    overlay.classList.remove('active');
});

// Quantity ka Buttons
document.querySelectorAll('.quantity-btn').forEach(button => {
    button.addEventListener('click', () => {
        const quantitySpan = button.parentElement.querySelector('span');
        let quantity = parseInt(quantitySpan.innerText);

        if (button.innerText === '+' && quantity < 10) {
            quantitySpan.innerText = quantity + 1;
        } else if (button.innerText === '-' && quantity > 1) {
            quantitySpan.innerText = quantity - 1;
        }
    });
});

// Product Filter ka Buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

const mobileBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');

mobileBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});
