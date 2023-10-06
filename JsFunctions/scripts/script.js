var meals = [
    {
        name: "Борщ",
        gramms: 500,
        kcal: 580
    },
    {
        name: "Блины с творогом",
        gramms: 50,
        kcal: 112
    },
    {
        name: "Плов",
        gramms: 100,
        kcal: 359
    },
    {
        name: "Печень",
        gramms: 100,
        kcal: 205
    },
    {
        name: "Салат мясной",
        gramms: 100,
        kcal: 385
    },
    {
        name: "Каша гречневая",
        gramms: 80,
        kcal: 151
    },
    {
        name: "Картофель отварной",
        gramms: 30,
        kcal: 28
    },
    {
        name: "Яйца вареные",
        gramms: 10,
        kcal: 12.6
    }
];

function checkMeals(meals) {
    meals.forEach(function (meal) {
        meal.kcalPer100Gram = calculateKcalPer100Grams(meal.gramms, meal.kcal);
        if (meal.kcalPer100Gram > 300) {
            showMealInfo(meal.name, meal.kcalPer100Gram);
        }
    });

    function showMealInfo(meal, kcalPer100Gram) {
        console.log("Блюдо " + meal + " имеет " + kcalPer100Gram + " на 100 грамм.");
    }

    function calculateKcalPer100Grams(grams, kcal){
        return Math.round(kcal/grams * 100);
    }
}

checkMeals(meals);

