import Vue from "vue"
import VueRouter from "vue-router"
import Vuex from "vuex"

import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import App from "@/composition/App.vue"
import { routes } from "@/composition/routes"
import { storeOptions } from "@/composition/store"

Vue.config.productionTip = false

Vue.use(Vuex)
const store = new Vuex.Store(storeOptions)

Vue.use(VueRouter)
const router = new VueRouter({ routes })

Vue.use(BootstrapVue)

export default new Vue({
    el: "#app",
    render: h => h(App),
    router,
    store
})
