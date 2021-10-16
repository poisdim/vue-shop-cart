<template>
    <div class="mainWrapper">
        <Catalog/>
    </div>
</template>

<script>
    import Cart from "./Cart";
    import Catalog from "./Catalog";

    export default {
        name: 'mainWrapper',
        props: {},
        components: {Cart, Catalog},
        data() {
            return {}
        },
        computed: {},
        methods: {}
    }
</script>

<style>
    .mainWrapper {
        max-width: 900px;
        margin: 0 auto;
    }
</style>