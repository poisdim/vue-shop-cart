import {createStore} from 'vuex'


export const store = createStore({
    state: {
        products: []
    },
    getters: {
        getProducts: state => state.products
    },
    actions: {
        async fetchProducts({commit}) {
            let res = await fetch('http://localhost:2222/products');
            let data = await res.json();
            commit('setProducts', data)
        }
    },
    mutations: {
        setProducts(state, payload) {
            state.products = payload
        }
    }
});