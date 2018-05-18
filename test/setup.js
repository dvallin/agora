const Vue = require("vue")
const Vuex = require("vuex")
const Storage = require("dom-storage")

const VueRouter = require("vue-router")

const BootstrapVue = require("bootstrap-vue")

window.sessionStorage = new Storage(null, { strict: false })

process.env = require("../config/dev.env")

Vue.use(Vuex)
Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.use(BootstrapVue)
