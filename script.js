let generatedCode = "";

// =========================
// ورود با شماره موبایل
// =========================

function sendCode() {

    const phone =
        document.getElementById("phone-number").value.trim();

    if (!/^09\d{9}$/.test(phone)) {

        document.getElementById("error-message").innerText =
            "شماره تماس معتبر نیست";

        return;
    }

    generatedCode =
        Math.floor(1000 + Math.random() * 9000).toString();

    alert("کد تایید شما: " + generatedCode);

    document.getElementById("otp-section").style.display =
        "block";
}

function verifyCode() {

const enteredCode =
    document.getElementById("otp-code").value.trim();

if (enteredCode === generatedCode) {

    document.getElementById("login-page").style.display =
        "none";

    document.getElementById("main-content").style.display =
        "block";

    localStorage.setItem(
        "authorized",
        "true"
    );

} else {

    document.getElementById("error-message").innerText =
        "کد تایید اشتباه است";
}


}

function logout() {


localStorage.removeItem("authorized");
localStorage.removeItem("phone");

location.reload();


}


window.onload = function () {


if (
    localStorage.getItem("authorized") === "true"
) {

    document.getElementById("login-page").style.display =
        "none";

    document.getElementById("main-content").style.display =
        "block";
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
    document.getElementById("cart-items");

cartItems.innerHTML = "";

cart.forEach(item => {

    const li =
        document.createElement("li");

    li.textContent =
        item.name + " - " +
        item.price.toLocaleString("fa-IR") +
        " تومان";

    cartItems.appendChild(li);
});

document.getElementById("total").textContent =
    total.toLocaleString("fa-IR");


}
