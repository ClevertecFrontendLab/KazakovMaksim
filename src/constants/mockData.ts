import appetizers from '~/assets/img/appetizers.png';
import cutlet from '~/assets/img/cutlet.jpg';
import dessertsAndPastries from '~/assets/img/desserts-and-pastries.png';
import drinks from '~/assets/img/drinks.png';
import elenaPovar from '~/assets/img/elena-povar.jpg';
import fantasticCooking from '~/assets/img/fantastic-cooking.jpg';
import grilledDishes from '~/assets/img/grilled-dishes.png';
import ham from '~/assets/img/ham.jpg';
import kidsMeals from '~/assets/img/kids-meals.png';
import mainCourses from '~/assets/img/main-courses.png';
import meatPreparations from '~/assets/img/meat-preparations.png';
import nationalDishes from '~/assets/img/national-dishes.png';
import noodles from '~/assets/img/noodles.jpg';
import pancakes from '~/assets/img/pancakes.jpg';
import salad from '~/assets/img/salad.jpg';
import salads from '~/assets/img/salads.png';
import sauces from '~/assets/img/sauces.png';
import soup from '~/assets/img/soup.jpg';
import soups from '~/assets/img/soups.png';
import spaghetti from '~/assets/img/spaghetti.jpg';
import therapeuticNutrition from '~/assets/img/therapeutic-nutrition.png';
import tomyum from '~/assets/img/tomyum.jpg';
import veganCuisine from '~/assets/img/vegan-cuisine.png';

export const mockProfileNotifications = { bookmarkHeart: 185, emojiHeart: 587, people: 589 };

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

export const mockProductCards = [
    {
        productTitle: 'Солянка с грибами',
        productDesc:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        imgSrc: soup,
        profileNotifications: { bookmarkHeart: 1 },
        category: {
            name: 'Первые блюда',
            imgSrc: soups,
        },
    },
    {
        productTitle: 'Капустные котлеты',
        productDesc:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
        imgSrc: cutlet,
        profileNotifications: { bookmarkHeart: 2, emojiHeart: 1 },
        category: {
            name: 'Веганские блюда',
            imgSrc: veganCuisine,
        },
    },
    {
        productTitle: 'Оладьи на кефире "Пышные"',
        productDesc:
            'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        imgSrc: pancakes,
        profileNotifications: { emojiHeart: 1 },
        category: {
            name: 'Десерты, выпечка',
            imgSrc: dessertsAndPastries,
        },
    },
    {
        productTitle: 'Салат "Здоровье"',
        productDesc:
            'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) Вкусный, необычный, а главное быстрый.',
        imgSrc: salad,
        category: {
            name: 'Салаты',
            imgSrc: salads,
        },
    },
    {
        productTitle: 'Солянка с грибами_',
        productDesc:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        imgSrc: soup,
        profileNotifications: { bookmarkHeart: 1 },
        category: {
            name: 'Первые блюда',
            imgSrc: soups,
        },
    },
    {
        productTitle: 'Капустные котлеты_',
        productDesc:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
        imgSrc: cutlet,
        profileNotifications: { bookmarkHeart: 2, emojiHeart: 1 },
        category: {
            name: 'Веганские блюда',
            imgSrc: veganCuisine,
        },
    },
];

export const mockProductHCards = [
    {
        productTitle: 'Кнели со спагетти',
        productDesc:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        imgSrc: spaghetti,
        profileNotifications: { bookmarkHeart: 85, emojiHeart: 152 },
        category: {
            name: 'Вторые блюда',
            imgSrc: mainCourses,
        },
    },
    {
        productTitle: 'Пряная ветчина по итальянски',
        productDesc:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        imgSrc: ham,
        profileNotifications: { bookmarkHeart: 159, emojiHeart: 259 },
        category: {
            name: 'Вторые блюда',
            imgSrc: veganCuisine,
        },
        recommendation: {
            name: 'Елена Высоцкая',
            imgSrc: elenaPovar,
        },
    },
    {
        productTitle: 'Лапша с курицей и шафраном ',
        productDesc:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        imgSrc: noodles,
        profileNotifications: { bookmarkHeart: 258, emojiHeart: 342 },
        category: {
            name: 'Вторые блюда',
            imgSrc: veganCuisine,
        },
        recommendation: {
            name: 'Alex Cook',
            imgSrc: fantasticCooking,
        },
    },
    {
        productTitle: 'Том-ям с капустой кимчи',
        productDesc:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        imgSrc: tomyum,
        profileNotifications: { bookmarkHeart: 124, emojiHeart: 324 },
        category: {
            name: 'Национальные',
            imgSrc: nationalDishes,
        },
    },
];
