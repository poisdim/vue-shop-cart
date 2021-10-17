<template>
    <div class="mainWrapper">
        <router-view/>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: 'mainWrapper',
        props: {},
        components: {},
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