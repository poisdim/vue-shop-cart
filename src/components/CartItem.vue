<template>
    <div class="cartItem">
        <img class="cartItem__image" :src="'img/' + cartItem.image " alt="cart_image">
        <div class="cartItem__name">
            <p>Name:{{cartItem.name}}</p>
            <p>Price:{{cartItem.price}}</p>
            <p>Article:{{cartItem.article}}</p>
        </div>
        <div class="cartItem__quantity">
            {{cartItem.count?cartItem.count:0}}
        </div>
        <button @click="deleteFromCart(index)">Delete</button>
    </div>
</template>

<script>
    export default {
        name: '',
        props: {
            cartItem: Object,
            deleteFromCart: Function,
            index: Number,
        },
        data() {
            return {}
        },
        computed: {},
        methods: {},

    }
</script>

<style lang="scss">
    .cartItem {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: $padding*2;
        margin-bottom: $margin*2;

        &__image {
            max-width: 50px;
        }

        .quantity__btn {
            cursor: pointer;
        }

        .quantity__tools {
            user-select: none;
        }
    }
</style>
