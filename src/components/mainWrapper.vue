<template>
    <div class="mainWrapper">
        <Catalog/>
        <Cart v-if="cart.length>0" :cart="cart"/>
    </div>
</template>

<script>
    import Cart from "./Cart";
    import Catalog from "./Catalog";
    import {mapGetters} from "vuex";

    export default {
        name: 'mainWrapper',
        props: {},
        components: {Cart, Catalog},
        data() {
            return {}
        },
        computed: {
            ...mapGetters(['cart'])
        },
        methods: {}
    }
</script>

<style>
    .mainWrapper {
        max-width: 900px;
        margin: 0 auto;
    }
</style>