window.onload = function () {
    let fullName = document.getElementById("fullName");
    fullName.onkeydown = (e) => {
        let element = e.key;
        if (+element || element === "0") {
            e.preventDefault();
        }
    }

    let username = document.getElementById("username");
    username.onkeydown = (e) => {
        let element = e.key;
        if (element === "." || element === ",") {
            e.preventDefault();
        }
    }

    let checkbox = document.getElementById("checkbox");
    let checkboxValue;
    checkbox.onchange = (e) => {
        let element = e.target.checked;
        if (element) {
            checkboxValue = 1;
            console.log("Согласен")
        } else {
            checkboxValue = 0;
            console.log("Не согласен")
        }
    }

    function fullname() {
        let name = document.getElementById("fullName").value;
        if (!name) {
            alert("Заполните поле Full Name");
            return false;
        }
        return name;
    }

    function userName() {
        let name = document.getElementById("username").value;
        if (!name) {
            alert("Заполните поле Your username");
            return false;
        }
        return name;
    }

    function eMail() {
        let name = document.getElementById("mail").value;
        if (!name) {
            alert("Заполните поле E-mail");
            return false;
        }
        return name;
    }

    function password() {
        let name = document.getElementById("password").value;
        if (!name) {
            alert("Заполните поле Password");
            return false;
        }
        return name;
    }

    function rePassword() {
        let name = document.getElementById("repeatPassword").value;
        if (!name) {
            alert("Заполните поле Repeat Password");
            return false;
        }
        return name;
    }

    function newLogin() {
        let username = userName();
        if (username && password()) {
            alert("Добро пожаловать " + username + "!");
        }
    }


    function login() {
        document.querySelector("h2").innerText = "Log in to the system";
        let currLabel = document.querySelector("label");
        let nextLabel = currLabel.nextElementSibling.nextElementSibling;
        currLabel.remove();
        for (let i = 0; i < 2; i++) {
            currLabel = nextLabel;
            nextLabel = nextLabel.nextElementSibling.nextElementSibling;
            currLabel.remove();
        }
        currLabel = nextLabel.previousElementSibling;
        nextLabel = nextLabel.children[0];
        nextLabel.innerText = "Sign In";
        currLabel.remove();
        currLabel = nextLabel.parentElement.children[1];
        currLabel.remove();
        error.removeEventListener('click', registry);
        error.addEventListener('click', newLogin);
    }

    function registry(event) {
        let flag = true;
        if (!(fullname() && userName() && eMail() && password() && rePassword())) {
            flag = false;
        }
        let pass = password();
        if (flag) {
            if (pass && pass.length < 8) {
                alert("Пароль должен содержать как минимум 8 символов");
                flag = false;
            }
            flag &&= pass;
        }
        if (flag && pass !== rePassword()) {
            alert("Пароли не совпадают!");
            flag = false;
        }
        if (flag && !checkboxValue) {
            alert("Вы обязаны согласиться!");
            flag = false;
        }
        if (!flag) {
            event.preventDefault();
        } else {
            let confirmStatus = confirm("На вашу почту выслана ссылка, перейдите по ней, чтобы завершить регистрацию");
            let currLabel = document.getElementById("fullName");
            currLabel.value = "";
            let countLabelsInForm = currLabel.parentElement.parentElement.querySelectorAll("label").length;
            for (let i = 2; i < countLabelsInForm; i++) {
                currLabel = currLabel.parentElement.nextElementSibling.children[1];
                currLabel.value = "";
            }
            currLabel = currLabel.parentElement.nextElementSibling.children[1];
            currLabel.checked = false;
            if (confirmStatus) {
                login();
            }
        }
    }

    let error = document.getElementById("btn");
    let log = document.getElementsByClassName("log")[0];
    log.onclick = login;
    error.addEventListener('click', registry);
}