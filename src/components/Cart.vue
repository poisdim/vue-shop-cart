<template>
    <div class="cart">
        <div class="cart__link_to_cart">
            <router-link :to="{name:'catalog'}">
                Catalog
            </router-link>
        </div>
        <h1>Cart {{cart.length===0?'is empty':''}}</h1>
        <CartItem v-for="(cartItem,i) in cart"
                  :cartItem="cartItem"
                  :key="Math.random()+i"
                  :deleteFromCart="deleteFromCart"
                  :index="i"
                  @increment="increment"
                  @decrement="decrement"
        />
        <div class="cart__total">
            {{cart.length===0?'Total:0':`$ ${total}`}}
        </div>
    </div>
</template>

<script>
    import CartItem from "./CartItem";
    import {mapActions, mapState} from "vuex";

    export default {
        name: '',
        props: {},
        data() {
            return {}
        },
        computed: {
            ...mapState({cart: 'cart'}),
            total() {
                return this.cart.reduce((a, b) => a + b.price * b.count, 0)
            }
        },
        methods: {
            ...mapActions(['deleteFromCartAction', 'incrementAction', 'decrementAction']),
            deleteFromCart(i) {
                this.deleteFromCartAction(i);
            },
            increment(i) {
                this.incrementAction(i);
            },
            decrement(i) {
                this.decrementAction(i);
            },
        },
        components: {
            CartItem
        }
    }
</script>

<style lang="scss">
    .cart {
        margin-bottom: 100px;
        position: relative;

        &__link_to_cart {
            position: fixed;
            top: 80px;
            left: 10px;
            padding: $padding*2;
            border: solid 1px black;
            box-shadow: 3px 5px 4px 0 black;
            border-radius: 5px;
            background: #ffffff;

            a {
                text-decoration: none;
                font-weight: 700;
                color: black;
            }
        }

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


    }
</style>