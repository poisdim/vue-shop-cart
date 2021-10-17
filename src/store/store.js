import {createStore} from 'vuex'


export const store = createStore({
    state: {
        products: [],
        cart: []
    },
    getters: {
        getProducts: state => state.products,
        cart: state => state.cart,
    },
    actions: {
        async fetchProductsAction({commit}) {
            let res = await fetch('http://localhost:2222/products');
            let data = await res.json();
            commit('setProducts', data)
        },
        addToCartAction({commit}, payload) {
            commit('setCart', payload)
        },
        deleteFromCartAction({commit}, payload) {
            commit('deleteFromCart', payload)
        }
    },
    mutations: {
        setProducts(state, payload) {
            state.products = payload
        },
        setCart(state, payload) {
            let inCart = state.cart.find(item => item.article === payload.article);
            if (!inCart) {
                payload.count = 1;
                state.cart.push(payload);
            } else {
                state.cart.map(el => {
                    if (el.article === payload.article) {
                        el.count++
                    }
                })
            }
        },
        deleteFromCart(state, payload) {
            state.cart.splice(payload, 1)
        }
    }
});