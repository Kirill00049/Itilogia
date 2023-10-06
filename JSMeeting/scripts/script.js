var mercedes = {
    name: "Mercedes",
    model: "GL450",
    engine: 4.0,
    year: 2015,
    color: "black",
    hp: 300,
    forSale: true
};

var bmw = {
    name: "BMW",
    model: "X6",
    engine: 3.0,
    year: 2018,
    color: "white",
    hp: 313,
    forSale: false
};

var audi = {
    name: "Audi",
    model: "Q7",
    engine: 3.0,
    year: 2021,
    color: "blue",
    hp: 249,
    forSale: true
};

//1.1
var year = 2023;
alert("Текущий год - " + year);

//1.2
mercedes.carAge = year - mercedes.year;
bmw.carAge = year - bmw.year;
audi.carAge = year - audi.year;
alert("Возраст mercedes - " + mercedes.carAge + "\nВозраст bmw - " + bmw.carAge + "\nВозраст audi - " + audi.carAge);

//1.3
var names = mercedes.name + ": " + mercedes.model + ", " +  bmw.name + ": " + bmw.model + ", " + audi.name + ": " + audi.model;
alert("Имена + модели машин - " + names);

//1.4
var averageAge = (mercedes.carAge + bmw.carAge + audi.carAge) / 3;
alert("Среднее арифметическое машин - " + averageAge);

//1.5
var atLeastOneForSale = mercedes.forSale || bmw.forSale || audi.forSale;
if (atLeastOneForSale) {
    alert("Хотя бы одна продается");
} else alert("Ни одна не продается");

//1.6
var allYoungerThanFive = mercedes.carAge < 5 && bmw.carAge < 5 && audi.carAge < 5;
if (allYoungerThanFive) {
    alert("Все младше");
} else alert("Каким-то из машин 5+ лет");

//1.7
var atLeastOneHasLittleHp = mercedes.hp < 250 || bmw.carAge < 250 || audi.carAge < 250;
if (atLeastOneHasLittleHp) {
    alert("Есть машин(а/ы) с движком < 250");
} else alert("Все машины имеют двигатель 250+ лошадей");

//2.2
function task2() {
    if (car.name === "Mercedes" && car.model === "GL450") {
        alert("Мой любимый мерседес!");
    } else {
        alert("Это - " + car.name + " " + car.model);
    }

    //2.3
    if (car.carAge === 0) {
        alert("Новый автомобиль");
    } else if (car.carAge <= 3) {
        alert("Свежий автомобиль");
    } else {
        alert("Лет этому авто: " + car.carAge);
    }

    //2.4
    var consumption = (car.engine > 3.0) ? "Прожорливый автомобиль" : "Экономичный автомобиль";
    alert(consumption)

    //2.5
    var russianColor;
    switch (car.color) {
        case "black":
            russianColor = "черный";
            break;
        case "silver":
            russianColor = "серебристый";
            break;
        case "red":
            russianColor = "красный";
            break;
        case "white":
            russianColor = "белый";
            break;
        case "gray":
            russianColor = "серый";
            break;
        case "blue":
            russianColor = "синий";
            break;
        default:
            russianColor = "Невозможно определить цвет автомобиля";
    }
    alert("Цвет автомобиля - " + russianColor);
}

//2.1
var car = bmw;
task2();

//2.6
car = mercedes;
task2();