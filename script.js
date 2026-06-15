// =========================
// سیستم کد دعوت
// =========================

const validCodes = [
    "DA001",
    "DA002",
    "DA003",
    "DA004",
    "DA005",
    "DA006",
    "DA007",
    "DA008",
    "DA009",
    "DA010"
];

function login() {

    const code =
        document.getElementById("invite-code").value.trim();

    if (validCodes.includes(code)) {

        document.getElementById("login-page").style.display = "none";

        document.getElementById("main-content").style.display = "block";

        localStorage.setItem("authorized", "true");

    } else {

        document.getElementById("error-message").innerText =
            "کد دعوت نامعتبر است";
    }
}

window.onload = function () {

    if (localStorage.getItem("authorized") === "true") {

        document.getElementById("login-page").style.display = "none";

        document.getElementById("main-content").style.display = "block";
    }
};


// =========================
// سبد خرید
// =========================

let cart = [];

let total = 0;

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    total += price;

    updateCart();
}

function updateCart() {

    const cartItems =
        document.getElementById('cart-items');

    cartItems.innerHTML = '';

    cart.forEach(item => {

        const li =
            document.createElement('li');

        li.textContent =
            `${item.name} - ${item.price} تومان`;

        cartItems.appendChild(li);
    });

    document.getElementById('total').textContent =
        total.toLocaleString('fa-IR');
}
