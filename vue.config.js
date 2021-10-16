module.exports = {
    devServer: {
        open: true
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/styles/styles.scss";`
            }
        }
    }
};


