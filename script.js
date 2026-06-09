let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({name: name, price: price});
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price} تومان`;
        cartItems.appendChild(li);
    });
    document.getElementById('total').textContent = total;
}