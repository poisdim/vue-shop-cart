<template>
    <div class="app">
        <mainWrapper/>
    </div>
</template>

<script>
    import mainWrapper from "./components/mainWrapper";

    export default {
        name: 'app',
        components: {mainWrapper},
        props: {},
        data() {
            return {}
        },
        computed: {},
        methods: {}
    }
</script>

<style>
    .app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 160px;
    }
</style>