let meals = `[
    {
        "name": "Борщ",
        "gramms": 500,
        "kcal": 580
    },
    {
        "name": "Блины с творогом"
    },
    {
        "name": "Плов",
        "gramms": 100,
        "kcal": 359
    },
    {
        "name": "Печень",
        "gramms": 100,
        "kcal": 205
    },
    {
        "name": "Салат мясной",
        "gramms": 100,
        "kcal": 385
    },
    {
        "name": "Каша гречневая",
        "gramms": 80,
        "kcal": 151
    },
    {
        "name": "Картофель отварной",
        "gramms": 30,
        "kcal": 28
    },
    {
        "name": "Яйца вареные",
        "gramms": 10,
        "kcal": 12.6
    }
]`;

function checkMeals(json) {
    let array = [];
    try {
        array = JSON.parse(json);
    } catch (e) {
        console.log("Данные невозможно отработать. Причина: " + e.message);
    }

    array.forEach(function (meal) {
        try {
            meal.kcalPer100Gram = calculateKcalPer100Grams(meal.gramms, meal.kcal);
        } catch (e) {
            meal.kcalPer100Gram = null;
        }

        showMealInfo(meal.name, meal.kcalPer100Gram);
    });

    function showMealInfo(meal, kcalPer100Gram) {
        console.log("Блюдо `" + meal + "`" + (kcalPer100Gram ? " имеет " + kcalPer100Gram + " на 100 грамм." : ". Нет данных на 100 грамм."));
    }

    function calculateKcalPer100Grams(grams, kcal) {
        if (!kcal || !grams) {
            throw new Error("Нет данных о граммах и каллориях");
        }
        return Math.round(kcal / grams * 100);
    }
}

checkMeals(meals);

