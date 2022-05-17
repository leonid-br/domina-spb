const data = {
    name: [
        'breakfast',
        'saladsAndSnacks',
        'soups',
        'burgers',
        'maindishes',
        'desserts',
        'drinks',
    ],
    id: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    ru: {
        Завтраки: [
            {
                id: 28,
                name: 'Яичница – глазунья с добавками на выбор',
                price: 320,
                description: 'лук, бекон, грибы, сыр, томаты, зелень',
            },
            {
                id: 29,
                name: 'Омлет с добавками на выбор',
                price: 350,
                description: 'лук, бекон, грибы, сыр, томаты, зелень',
            },
            {
                id: 30,
                name: 'Яйца бенедикт с беконом и голландским соусом',
                price: 390,
                description: '',
            },
            {
                id: 31,
                name: 'Яйца роял с лососем, шпинатом и голландским соусом',
                price: 490,
                description: '',
            },
            {
                id: 32,
                name: 'Оладьи из цуккини с лососем и рикоттой',
                price: 490,
                description: '',
            },
            {
                id: 33,
                name: 'Каша овсяная',
                price: 300,
                description: '',
            },
            {
                id: 34,
                name: 'Асаи боул',
                price: 350,
                description: '',
            },
            {
                id: 35,
                name: 'Блинчики по-русски',
                price: 300,
                description:
                    'подаются со сметаной и домашним вареньем',
            },
            {
                id: 36,
                name: 'Хрустящие бельгийские вафли',
                price: 330,
                description: '',
            },
            {
                id: 37,
                name: 'Сырники с сезонными ягодами и сметаной',
                price: 350,
                description: '',
            },
            {
                id: 38,
                name: 'Красная икра с блинами',
                price: 840,
                description: '',
            },
            {
                id: 8,
                name: 'Икра осетровая с блинами',
                price: 7200,
                description: '50 гр',
            },
        ],
        'Салаты и закуски': [
            {
                id: 1,
                name: 'Тост с лососем и цуккини',
                price: 760,
                description: '',
            },
            {
                id: 2,
                name: 'Тост с авокадо и яйцом пашот',
                price: 690,
                description: '',
            },
            {
                id: 3,
                name: 'Итальянский сет к вину',
                price: 1200,
                description:
                    'Итальянские колбасы и сыры, артишоки гриль, оливки, кростини',
            },
            {
                id: 4,
                name: 'Цезарь с цыпленком',
                price: 750,
                description: '',
            },
            {
                id: 5,
                name: 'Цезарь с креветками',
                price: 880,
                description: '',
            },
            {
                id: 6,
                name: 'Теплый салат с говядиной',
                price: 710,
                description: '',
            },
            {
                id: 7,
                name: 'Салат из сезонных овощей с халуми',
                price: 740,
                description: '',
            },
        ],
        Супы: [
            {
                id: 9,
                name: ' Борщ с пампушками и сметаной',
                price: 640,
                description: '',
            },
            {
                id: 10,
                name: 'Куриный суп с домашней лапшой',
                price: 520,
                description: '',
            },
        ],
        'Бургеры и сендвичи': [
            {
                id: 11,
                name: 'Кайенский бургер',
                price: 1200,
                description:
                    'Котлета из мраморной говядины, овощи гриль, соус с кайенским перцем. Подается с картофелем фри и домашними соусами',
            },
            {
                id: 12,
                name: 'Domina чизбургер',
                price: 1200,
                description:
                    'Котлета из мраморной говядины, Чеддер, огуречный релиш. Подается с картофелем фри и домашними соусами',
            },
            {
                id: 13,
                name: 'Врап с цыпленком',
                price: 750,
                description: '',
            },
            {
                id: 14,
                name: 'Клубный сэндвич',
                price: 980,
                description:
                    'Подается с картофелем фри и домашними соусами',
            },
        ],
        'Горячие блюда': [
            {
                id: 15,
                name: 'Палтус с кремом из баклажана',
                price: 1350,
                description: '',
            },
            {
                id: 16,
                name: 'Фланк стейк с битым картофелем',
                price: 1100,
                description: '',
            },
            {
                id: 17,
                name: 'Соте из креветок и кальмара',
                price: 1300,
                description: '',
            },
            {
                id: 18,
                name: 'Спагетти карбонара',
                price: 720,
                description: '',
            },
            {
                id: 19,
                name: 'Ригатони качо э пепе',
                price: 650,
                description: '',
            },
            {
                id: 20,
                name: 'Хрустящий баклажан',
                price: 640,
                description: '',
            },
        ],
        Десерты: [
            {
                id: 21,
                name: 'Шоколадный брауни с мороженым',
                price: 550,
                description: '',
            },
            {
                id: 22,
                name: 'Наполеон',
                price: 510,
                description: '',
            },
            {
                id: 23,
                name: 'Фруктовая тарелка',
                price: 900,
                description: '',
            },
            {
                id: 24,
                name: 'Ассорти итальянских сыров',
                price: 950,
                description: '',
            },
            {
                id: 25,
                name: 'Домашнее мороженое и сорбеты',
                price: 650,
                description: '',
            },
        ],
        Напитки: [
            {
                id: 26,
                name: 'Домашнее мороженое и сорбеты',
                price: 650,
                description: '',
            },
            {
                id: 27,
                name: 'Домашнее мороженое и сорбеты',
                price: 650,
                description: '',
            },
            {
                id: 39,
                name: 'Домашнее мороженое и сорбеты',
                price: 650,
                description: '',
            },
            {
                id: 40,
                name: 'Домашнее мороженое и сорбеты',
                price: 650,
                description: '',
            },
            {
                id: 41,
                name: 'Домашнее мороженое и сорбеты',
                price: 650,
                description: '',
            },
            {
                id: 42,
                name: 'Домашнее мороженое и сорбеты',
                price: 650,
                description: '',
            },
        ],
    },
    en: {
        Breakfast: [
            {
                id: 28,
                name: 'Fried eggs with toppings of your choice',
                price: 320,
                description:
                    'onion, bacon, mushrooms, cheese, tomatoes, greens',
            },
            {
                id: 29,
                name: 'Omelet with toppings of your choice',
                price: 350,
                description:
                    'onion, bacon, mushrooms, cheese, tomatoes, greens',
            },
            {
                id: 30,
                name: 'Eggs Benedict with bacon and Hollandaise sauce',
                price: 390,
                description: '',
            },
            {
                id: 31,
                name: 'Royal eggs with salmon, spinach and Hollandaise sauce',
                price: 490,
                description: '',
            },
            {
                id: 32,
                name: 'Zucchini pancakes with salmon and ricotta',
                price: 490,
                description: '',
            },
            {
                id: 33,
                name: 'Oatmeal porridge',
                price: 300,
                description: '',
            },
            {
                id: 34,
                name: 'Acai bowl',
                price: 350,
                description: '',
            },
            {
                id: 35,
                name: 'Russian style pancakes',
                price: 300,
                description: 'served with jam and sour cream',
            },
            {
                id: 36,
                name: 'Crispy Belgian waffles',
                price: 330,
                description: '',
            },
            {
                id: 37,
                name: 'Cottage cheese pancakes with seasonal berries and sour cream',
                price: 350,
                description: '',
            },
            {
                id: 38,
                name: 'Salmon caviar with with russian pancakes',
                price: 840,
                description: '',
            },
            {
                id: 8,
                name: 'Black caviar with russian pancakes',
                price: 5200,
                description: '50 gr',
            },
        ],
        'Salads and Snacks': [
            {
                id: 1,
                name: 'Salmon toast with zucchini',
                price: 760,
                description: '',
            },
            {
                id: 2,
                name: 'Avocado toast with poached egg',
                price: 690,
                description: '',
            },
            {
                id: 3,
                name: 'Italian wine set',
                price: 1200,
                description:
                    'italian sausages and cheese, grilled artichokes, olives, crostini',
            },
            {
                id: 4,
                name: 'Caesar salad with chicken',
                price: 750,
                description: '',
            },
            {
                id: 5,
                name: 'Caesar salad with tiger shrimps',
                price: 880,
                description: '',
            },
            {
                id: 6,
                name: 'Warm salad with beef',
                price: 710,
                description: '',
            },
            {
                id: 7,
                name: 'Seasonal vegetables with halloumi',
                price: 740,
                description: '',
            },
        ],
        Soups: [
            {
                id: 9,
                name: 'Borsch with garlic bread rolls and sour cream',
                price: 640,
                description: '',
            },
            {
                id: 10,
                name: 'Chicken broth with noodles',
                price: 520,
                description: '',
            },
        ],
        'Bourgers and Sandwiches': [
            {
                id: 11,
                name: 'Cayenne burger ',
                price: 1200,
                description:
                    'Marbled beef patty, grilled vegetables, sauce with cayenne pepper Served with French fries and homemade sauces',
            },
            {
                id: 12,
                name: 'Domina cheeseburger',
                price: 1200,
                description:
                    'Marbled beef patty, Cheddar, cucmber relish. Served with French fries and homemade sauces',
            },
            {
                id: 13,
                name: 'Chicken wrap',
                price: 750,
                description: '',
            },
            {
                id: 14,
                name: 'Club sandwich',
                price: 980,
                description:
                    'Served with French fries and homemade sauces',
            },
        ],
        'Main Dishes': [
            {
                id: 15,
                name: 'Halibut with eggplant cream',
                price: 1350,
                description: '',
            },
            {
                id: 16,
                name: 'Flank steak with potato',
                price: 1100,
                description: '',
            },
            {
                id: 17,
                name: 'Sauteed king prawns and squid',
                price: 1300,
                description: '',
            },
            {
                id: 18,
                name: 'Spaghetti alla carbonara',
                price: 720,
                description: '',
            },
            {
                id: 19,
                name: 'Rigatoni cacio e pepe',
                price: 650,
                description: '',
            },
            {
                id: 20,
                name: 'Asian style crispy eggplant',
                price: 640,
                description: '',
            },
        ],
        Desserts: [
            {
                id: 21,
                name: 'Chocolate brownie with ice-cream',
                price: 550,
                description: '',
            },
            {
                id: 22,
                name: 'The Napoleon cake',
                price: 510,
                description: '',
            },
            {
                id: 23,
                name: 'Fruit plate',
                price: 900,
                description: '',
            },
            {
                id: 24,
                name: 'Italian cheese plate',
                price: 950,
                description: '',
            },
            {
                id: 25,
                name: 'Homemade ice-cream and sorbet',
                price: 650,
                description: '',
            },
        ],
        Drinks: [],
    },
};

export default data;