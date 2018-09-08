import Vue from "vue"
import App from "./app.vue"
import router from "./route/router.js"
new Vue({
    router,
    el:"#app",
    render:h=>h(App)
})