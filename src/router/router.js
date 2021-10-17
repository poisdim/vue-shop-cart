import Catalog from "../components/Catalog";
import {createRouter, createWebHistory} from "vue-router";
import Cart from "../components/Cart";

const routes = [{
    name: 'catalog',
    path: '/',
    component: Catalog,
    props: true
},
    {
        name: 'cart',
        path: '/cart',
        component: Cart,
        props: true
    }
];


export const router = createRouter({
    routes,
    history: createWebHistory(),
});

