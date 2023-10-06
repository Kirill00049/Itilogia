let clients = [
    {
        firstname: "Александр",
        lastName: "Иванчук",
        date: " 11-29-1990",
        phone: "8 (929) 988-90-09",
        amounts: [2546, 2098, 764, 7266]
    },
    {
        firstname: "Анатолий",
        lastName: "Стаценко",
        date: "02-12-1987",
        phone: null,
        amounts: [563, 8287, 889]
    },
    {
        firstname: "Марина",
        lastName: "Петрова",
        date: "07-26-1997",
        phone: "8 (899) 546-09-08",
        amounts: [6525, 837, 1283, 392]
    },
    {
        firstname: "Иван",
        lastName: "Караванов",
        date: "09-12-1999",
        phone: null,
        amounts: [7634, 283, 9823, 3902]
    },
    {
        firstname: "Оксана",
        lastName: "Абрамова",
        date: "01-24-2002",
        phone: "8 (952) 746-99-22",
        amounts: [342, 766, 362]
    },
];

let newClient = {};

function meeting() {
    while (true) {
        newClient.firstname = prompt("Введите имя: ");
        if (newClient.firstname) {
            break;
        }
    }
    while (true) {
        newClient.lastName = prompt("Введите фамилию: ");
        if (newClient.lastName) {
            break;
        }
    }
    while (true) {
        newClient.date = prompt("Введите дату рождения в формате (месяц-день-год): ");
        if (newClient.date) {
            break;
        }
    }
    while (true) {
        newClient.phone = prompt("Введите номер телефона: ");
        if (newClient.phone) {
            break;
        }
    }
    newClient.amounts = [];
    let amount;
    while (confirm("Добавить покупку для клиента " + newClient.firstname + " ?")) {
        amount = +prompt("Введите сумму покупки.");
        if (amount) {
            newClient.amounts.push(amount);
        }
    }
}

meeting();
clients.push(newClient);

function fullName(client) {
    return client.firstname + " " + client.lastName;
}

function getBirthday(date) {
    let options = {
        month: 'long',
        day: 'numeric'
    };
    let today = new Date();
    let birthday = new Date(date);
    let newDate = birthday.toLocaleString('ru-RU', options);
    return today.getDate() === birthday.getDate() && today.getMonth() === birthday.getMonth() ? newDate + " (сегодня)" : newDate;
}

function getAllAmount(amounts) {
    let sum = 0;
    amounts.forEach((item) => {
        sum += item;
    });
    return sum;
}

function getAverageAmount(amounts) {
    let sum = getAllAmount();
    let avgSum = 0;
    avgSum = sum / amounts.length;
    return avgSum.toFixed(1);
}

// 6. Создайте стрелочную функцию в новую переменную - showClients. Функция должна принимать один параметр - главный
// массив клиентов clients и для каждого клиента (в цикле) выводить сообщение “Клиент X имеет среднюю сумму чека Y.
// День рождения клиента: D”, где X - значение результата функции fullName для текущего объекта клиента в цикле, Y -
// средний чек клиента на основе его покупок в массиве amounts из функции getAverageAmount, а D - дата рождения клиента
// из функции getBirthday. Помните о том, что внутри функции вам надо работать с переданным в неё массивом, а для
// каждого отдельного вызова других функций в цикле передавать соответствующее значение, используя конкретный объект
// по индексу.
let showClients = (clients) => {
    clients.forEach((client) => {
        console.log("Клиент " + fullName(client) + " имеет среднюю сумму чека " + getAverageAmount(client.amounts) +
            ". День рождения клиента: " + getBirthday(client.date));
    });
}

showClients(clients);

try {
    showClients();
} catch (error) {
    console.log("Вызвана функция без параметров");
    console.log(error.message);
}

let bestClients = [
    {
        firstname: "Борис",
        lastName: "Бобров",
        date: " 11-29-1980",
        phone: "8 (929) 982-90-09",
        amounts: [2546, 24098, 7664, 7266, 7664, 7266]
    },
    {
        firstname: "Анатолий",
        lastName: "Стаценко",
        date: "01-07-1987",
        phone: null,
        amounts: [563, 82827, 889, 5632, 8287, 889]
    }
];

let b = setInterval(() => {
    showClients(bestClients);
}, 3000);

clearInterval(b);

function whoSpentMore(clients) {
    let maxSum = 0;
    let name = "";
    let amounts;
    clients.forEach((client) => {
        amounts = getAllAmount(client.amounts);
        if (maxSum < amounts) {
            maxSum = amounts;
            name = fullName(client);
        }
    })
    return "Больше всех потратил " + name + ". Сумма покупок: " + maxSum + "."
}

console.log(whoSpentMore(clients));
console.log(whoSpentMore(bestClients));