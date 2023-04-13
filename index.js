// Vue
// import { createApp } from './resources/vue/vue.esm-browser.prod.js'

// Pages
import pageSobre from './components/pages/sobre.js'
import pageReportar from './components/pages/reportar.js'
import pageArena from './components/pages/arena.js'
// Widgets
import appBar from './components/widgets/widgetAppbar.js'

const routes = [
    { path: '/',  component: pageSobre},
    { path: '/reportar', component: pageReportar},
    { path: '/arena', component: pageArena},
    { path: '/donate', component: pageSobre}
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
})
const vuetify = Vuetify.createVuetify()
const app = Vue.createApp({
    data() {
        return {
            componente: window.location.hash
        }
    },
    components: {
        'app-bar': appBar
    },
    computed: {
        username() {
            return this.$route.params.username
          }
    },
    methods:{

    },
    mounted() {
        window.addEventListener('hashchange', () => {
            this.componente = window.location.hash
        })
    }
})

app.use(router)
app.use(vuetify)
app.mount('#app')