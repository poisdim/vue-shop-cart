<template>
    <div class="catalogItem">
        <img class="catalogItem__image" :src="'img/' + product.image " alt="">
        <p class="catalogItem__name">{{product.name}}</p>
        <p class="catalogItem__price">$ {{product.price}}</p>
        <button @click="addToCart" class="catalogItem__btn btn">Add to cart</button>
    </div>
</template>

<script>
    export default {
        name: '',
        props: {
            product: Object
        },
        data() {
            return {}
        },
        computed: {},
        methods: {
            addToCart() {
                this.$emit('addToCart', this.product)
            }
        }
    }
</script>

<style lang="scss">
    .catalogItem {
        flex-basis: 25%;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: $padding*2;
        margin-bottom: $margin*2;

        &__image {
            width: 183px;
            height: 275px;
        }
    }
</style>
