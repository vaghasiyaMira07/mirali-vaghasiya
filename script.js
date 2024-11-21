let cart = [];
let total = 0;

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    total += itemPrice;
}

document.getElementById('view-cart').addEventListener('click', function() {
    displayCart();
});

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });
    document.getElementById('total-amount').textContent = total;
    document.getElementById('cart').style.display = 'block';
}

function checkout() {
    document.getElementById('cart').style.display = 'none';
    document.getElementById('checkout-form').style.display = 'block';
    const summaryItems = document.getElementById('summary-items');
    summaryItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        summaryItems.appendChild(li);
    });
    document.getElementById('summary-total').textContent = total;
}

function submitOrder(event) {
    event.preventDefault();
    const address = document.getElementById('address').value;
    alert(`Order placed successfully!\nDelivery Address: ${address}\nTotal Amount: $${total}`);
    resetCart();
}

function resetCart() {
    cart = [];
    total = 0;
    document.getElementById('cart').style.display = 'none';
    document.getElementById('checkout-form').style.display = 'none';
}