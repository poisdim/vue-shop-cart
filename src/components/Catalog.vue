<template>
    <div class="catalog">
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
        computed: {...mapGetters(['getProducts'])},
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
            border: solid 1px #aeaeae;
            background: #ffffff;
        }
    }

    .filters {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .range-slider {
        width: 200px;
        margin: auto 16px;
        text-align: center;
        position: relative;
    }

    .range-slider svg, .range-slider input[type=range] {
        position: absolute;
        left: 0;
        bottom: 0;
    }

    input[type=range]::-webkit-slider-thumb {
        z-index: 2;
        position: relative;
        top: 2px;
        margin-top: -7px;
    }
</style>
