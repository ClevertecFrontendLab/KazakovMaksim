import appetizers from '~/assets/img/appetizers.png';
import dessertsAndPastries from '~/assets/img/desserts-and-pastries.png';
import drinks from '~/assets/img/drinks.png';
import grilledDishes from '~/assets/img/grilled-dishes.png';
import kidsMeals from '~/assets/img/kids-meals.png';
import mainCourses from '~/assets/img/main-courses.png';
import meatPreparations from '~/assets/img/meat-preparations.png';
import nationalDishes from '~/assets/img/national-dishes.png';
import salads from '~/assets/img/salads.png';
import sauces from '~/assets/img/sauces.png';
import soups from '~/assets/img/soups.png';
import therapeuticNutrition from '~/assets/img/therapeutic-nutrition.png';
import veganCuisine from '~/assets/img/vegan-cuisine.png';

export const categoryIcons = {
    salads,
    appetizers,
    soups,
    mainCourses,
    dessertsAndPastries,
    grilledDishes,
    veganCuisine,
    kidsMeals,
    therapeuticNutrition,
    nationalDishes,
    sauces,
    meatPreparations,
    drinks,
};

export const menuData = {
    salads: {
        categoryName: 'Салаты',
        categoryItems: ['Мясные салаты', 'Рыбные салаты', 'Овощные салаты', 'Теплые салаты'],
    },
    appetizers: {
        categoryName: 'Закуски',
        categoryItems: [
            'Мясные закуски',
            'Рыбные закуски',
            'Овощные закуски',
            'Теплые закуски',
            'Бутерброды',
            'Фастфуд',
        ],
    },
    soups: {
        categoryName: 'Первые блюда',
        categoryItems: [
            'Мясные супы',
            'Овощные супы',
            'Бульоны',
            'Холодные супы',
            'Диетические супы',
        ],
    },
    mainCourses: {
        categoryName: 'Вторые блюда',
        categoryItems: [
            'Мясные',
            'Рыбные',
            'Овощные',
            'Из птицы',
            'Из грибов',
            'Из субпродуктов',
            'На пару',
            'Пельмени, вареники',
            'Мучные гарниры',
            'Овощные гарниры',
            'Пицца',
            'Суши',
        ],
    },
    dessertsAndPastries: {
        categoryName: 'Десерты, выпечка',
        categoryItems: [
            'Блины и оладьи',
            'Пироги и пончики',
            'Торты',
            'Рулеты',
            'Кексы и маффины',
            'Сырники и ватрушки',
            'Из слоеного теста',
            'Из заварного теста',
            'Из дрожжевого теста',
            'Булочки и сдоба',
            'Хлеб',
            'Тесто на пиццу',
            'Кремы',
        ],
    },
    grilledDishes: {
        categoryName: 'Блюда на гриле',
        categoryItems: ['Говядина', 'Свинина', 'Птица', 'Рыба', 'Грибы', 'Овощи'],
    },
    veganCuisine: {
        categoryName: 'Веганская кухня',
        categoryItems: [
            'Закуски',
            'Первые блюда',
            'Вторые блюда',
            'Гарниры',
            'Десерты',
            'Выпечка',
            'Сыроедческие блюда',
            'Напитки',
        ],
    },
    kidsMeals: {
        categoryName: 'Детские блюда',
        categoryItems: [
            'Первые блюда',
            'Вторые блюда',
            'Гарниры',
            'Выпечка',
            'Без глютена',
            'Без сахара',
            'Без аллергенов',
            'Блюда для прикорма',
        ],
    },
    therapeuticNutrition: {
        categoryName: 'Лечебное питание',
        categoryItems: [
            'Детская диета',
            'Диета №1',
            'Диета №2',
            'Диета №3',
            'Диета №5',
            'Диета №6',
            'Диета №7',
            'Диета №8',
            'Диета №9',
            'Диета №10',
            'Диета №11',
            'Диета №11',
            'Диета №12',
            'Диета №13',
            'Диета №14',
            'Без глютена',
            'Без аллергенов',
        ],
    },
    nationalDishes: {
        categoryName: 'Национальные',
        categoryItems: [
            'Американская кухня',
            'Армянская кухня',
            'Греческая кухня',
            'Грузинская кухня',
            'Итальянская кухня',
            'Испанская кухня',
            'Китайская кухня',
            'Мексиканская кухня',
            'Паназиатская кухня',
            'Русская кухня',
            'Турецкая кухня',
            'Французская кухня',
            'Шведская кухня',
            'Японская кухня',
            'Другая кухня',
        ],
    },
    sauces: {
        categoryName: 'Соусы',
        categoryItems: ['Соусы мясные', 'Соусы сырные', 'Маринады', 'Домашние заготовки'],
    },
    meatPreparations: {
        categoryName: 'Мясные заготовки',
        categoryItems: [
            'Рыбные заготовки',
            'Из огурцов',
            'Из томатов',
            'Из грибов',
            'Овощные заготовки',
            'Салаты, икра',
            'Из фруктов и ягод',
        ],
    },
    drinks: {
        categoryName: 'Напитки',
        categoryItems: [
            'Соки и фреши',
            'Смузи',
            'Компоты',
            'Кисели',
            'Кофе',
            'Лечебный чай',
            'Квас',
            'Коктейли',
            'Алкогольные',
        ],
    },
};
