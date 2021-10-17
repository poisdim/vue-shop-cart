<template>
    <div class="catalog">
        <router-link :to="{name:'cart',params:{}}">
            <div class="catalog__link_to_cart">
                Cart:{{cartLength}}
            </div>
        </router-link>
        <h1>Catalog</h1>
        <div class="catalog__list">
            <CatalogItem v-for="(product,i) in getProducts"
                         :product="product"
                         @addToCart="addToCart"
                         :key="Math.random() + i"/>
        </div>

    </div>
</template>

<script>
    import CatalogItem from "./CatalogItem";
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: 'Catalog',
        components: {CatalogItem},
        props: {},
        data() {
            return {}
        },
        computed: {
            ...mapGetters(['getProducts', 'cart']), cartLength() {
                return this.cart.length > 0 ? this.cart.length : 0
            }
        },
        methods: {
            ...mapActions(['fetchProductsAction', 'addToCartAction']),
            addToCart(data) {
                this.addToCartAction(data)
            }
        },
        mounted() {
            this.fetchProductsAction()
        }
    }
</script>

<style lang="scss">
    .catalog {
        &__list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
        }

        &__link_to_cart {
            position: fixed;
            top: 80px;
            right: 10px;
            padding: $padding*2;
            border: solid 1px black;
            box-shadow: 3px 5px 4px 0 black;
            border-radius: 5px;
            background: #ffffff;
            text-decoration: none;
            font-weight: 700;
            color: black;
        }
    }


</style>
