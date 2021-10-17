<template>
    <div class="cart">
        Cart
        <CartItem v-for="(cartItem,i) in cart"
                  :cartItem="cartItem"
                  :key="Math.random()+i"
                  :deleteFromCart="deleteFromCart"
                  :index="i"
        />
    </div>
</template>

<script>
    import CartItem from "./CartItem";
    import {mapActions} from "vuex";

    export default {
        name: '',
        props: {
            cart: {
                type: Array, default() {
                    return []
                }
            }
        },
        data() {
            return {}
        },
        computed: {},
        methods: {
            ...mapActions(['deleteFromCartAction']),
            deleteFromCart(i) {
                this.deleteFromCartAction(i);
            }
        },
        components: {
            CartItem
        }
    }
</script>

<style lang="scss">
    .cart {
        margin-bottom: 100px;

        &__total {
            position: fixed;
            bottom: 0;
            right: 0;
            left: 0;
            padding: $padding*2 $padding*3;
            display: flex;
            justify-content: center;
            background: $green-bg;
            color: #ffffff;
            font-size: 20px;
        }

        .total__name {
            margin-right: $margin*2;
        }
    }
</style>