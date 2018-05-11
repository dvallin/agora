const Vue = require("vue")
const Vuex = require("vuex")

const VueRouter = require("vue-router")

const BootstrapVue = require("bootstrap-vue")

process.env = require("../config/dev.env")

Vue.use(Vuex)
Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.use(BootstrapVue)
