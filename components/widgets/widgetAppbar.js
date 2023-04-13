import mainDrawer from './widgetDrawer.js'

export default {
    components:{
        'main-drawer': mainDrawer
    },
    data() {
        return {
            items: [
                { title: 'num1' },
                { title: 'num2' }
            ],
            drawer: false
        }
    },
    methods:{
        changeDrawer(){
            this.drawer = !this.drawer
        }
    },
    provide(){
        return{
           drawer: Vue.computed(()=>this.drawer)
        }
    },
    template:
        `
        <v-app-bar app fixed color="black">
            <v-app-bar-nav-icon @click="changeDrawer"><span class="material-symbols-outlined">menu</span></v-app-bar-nav-icon>
            <v-app-bar-title><router-link to="/" class="nav-item-custom">JP!G</router-link></v-app-bar-title>
            <v-btn><router-link to="/reportar" class="nav-item-custom">Reportar</router-link></v-btn>
            <v-btn><router-link to="/arena" class="nav-item-custom">Arena</router-link></v-btn>
            <v-btn><router-link to="/donate" class="nav-item-custom">Doar</router-link></v-btn>
            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-btn color="white" v-bind="props">
                        <span class="material-symbols-outlined">more_vert</span>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="(item, index) in items" :key="index" :value="index">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
        <main-drawer></main-drawer>
        `
}