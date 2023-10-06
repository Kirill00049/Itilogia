window.onload = function() {
    let pizzaTitle = document.getElementById("choose-pizza");
    pizzaTitle.onclick = function (e) {
        document.getElementsByClassName("products")[0].scrollIntoView({behavior: "smooth"});
    }

    let inputButton = document.getElementById("product-input");
    let addToCartBtn = document.getElementsByClassName("product-btn");
    for (let i = 0; i < addToCartBtn.length; i++) {
        addToCartBtn[i].onclick = function (e) {
            let title = e.target.parentElement.parentElement.children[1].innerText;
            inputButton.value = title;
            document.getElementsByClassName("order")[0].scrollIntoView({behavior: "smooth"});
        }
    }

    document.getElementById("create-order").onclick = function() {
        let addressInput = document.getElementById("address-input");
        let phoneInput = document.getElementById("phone-input");
        if (!inputButton.value) {
            alert("Заполните пиццу");
            return;
        }
        if (!addressInput.value) {
            alert("Заполните адресс");
            return;
        }
        if (!phoneInput.value) {
            alert("Заполните телефон");
            return;
        }
        inputButton.value = "";
        addressInput.value = "";
        phoneInput.value = "";
        alert("Спасибо за заказ!");
    }
}