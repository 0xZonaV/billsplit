import {MenuItem} from "@/store/menu/menu-types";

export const firebaseConfig = {
    apiKey: "AIzaSyAO155af5IBhclOn437Q0jQZy-7ho69byM",
    authDomain: "bill-split-b57f6.firebaseapp.com",
    projectId: "bill-split-b57f6",
    storageBucket: "bill-split-b57f6.appspot.com",
    messagingSenderId: "237496215594",
    appId: "1:237496215594:web:ad3d64950c50caf4a07b53",
    measurementId: "G-6NNZVCBKRV"
};

export const restaurantMenu: MenuItem[] = [
    {
        "calories": "221/10/16/7",
        "category": "salads",
        "description": "Микс салата, соус Цезарь, сыр, яйцо перепелиное, томаты свежие, сухарики пшеничные, филе куриное ",
        "grammar": 250,
        "id": 1,
        "imgUrl": "/img/salat-cesar.jpg",
        "name": "Цезарь с курицей",
        "price": 400,
        "stock": 25
    },
    {
        "calories": "87/2/6/4",
        "category": "salads",
        "description": "Томаты, огурцы, болгарский перец, листья салатов, маслины, красный лук и соус Крем Чиз ",
        "grammar": 250,
        "id": 2,
        "imgUrl": "/img/greekSalad.png",
        "name": "Греческий салат",
        "price": 250,
        "stock": 25
    },
    {
        "calories": "222/9/7/29",
        "category": "pizza",
        "description": "Томаты, базилик, сыр, соус.",
        "grammar": 500,
        "id": 3,
        "imgUrl": "/img/margaritaPizza.jpg",
        "name": "Маргарита",
        "price": 550,
        "stock": 25
    },
    {
        "calories": "319/14/16/26",
        "category": "pizza",
        "description": "Моцарелла, Пармезан, Эмменталь и Горгонзола ",
        "grammar": 500,
        "id": 4,
        "imgUrl": "/img/fourCheeze.jpg",
        "name": "Четыре сыра",
        "price": 600,
        "stock": 10
    },
    {
        "calories": "75/0/0/17",
        "category": "drinks",
        "description": "Газированная вода,, сахар, сок лайма концентрированный, растительные экстракты",
        "grammar": 500,
        "id": 5,
        "imgUrl": "/img/mohito.jpg",
        "name": "Мохито",
        "price": 200,
        "stock": 25
    },
    {
        "calories": "60/0/0/13",
        "category": "drinks",
        "description": "Свежевыжатый апельсиновый сок",
        "grammar": 500,
        "id": 6,
        "imgUrl": "/img/orangeJuice.jpg",
        "name": "Апельсиновый сок ",
        "price": 300,
        "stock": 35
    },
    {
        "calories": "42/0/0/10",
        "category": "drinks",
        "description": " ",
        "grammar": 500,
        "id": 7,
        "imgUrl": "/img/cocaCola.jpg",
        "name": "Coca-Cola",
        "price": 250,
        "stock": 25
    },
    {
        "calories": "28/0/0/7",
        "category": "drinks",
        "description": " ",
        "grammar": 500,
        "id": 8,
        "imgUrl": "/img/fanta.jpg",
        "name": "Fanta",
        "price": 250,
        "stock": 20,
    }
]