<template>
    <div class="cart">
        Cart
    </div>
</template>

<script>
    export default {
        name: '',
        props: {},
        data() {
            return {}
        },
        computed: {},
        methods: {}
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