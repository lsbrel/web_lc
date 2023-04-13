export default{
    inject: ['drawer'],
    template:
    `
    <v-navigation-drawer v-model="drawer.value" location="left" temporary>
        <v-divider></v-divider>
        <router-link to="/reportar" class="nav-item-custom-black">
            <v-card>
                <v-list-item title="Reportar" subtitle="Área para relatar algum problema com o site/app">
                </v-list-item>
            </v-card>
        </router-link>
        <v-divider></v-divider>
        <router-link to="/arena" class="nav-item-custom-black">
            <v-card>
                <v-list-item title="Locais" subtitle="Indique alguma arena para o sistema.">
                </v-list-item>
            </v-card>
        </router-link>
        <v-divider></v-divider>
        <router-link to="/donate" class="nav-item-custom-black">
            <v-card>
                <v-list-item title="Doar" subtitle="Ajude a financiar a iniciativa">
                </v-list-item>
            </v-card>
        </router-link>
        <template v-slot:append>
            <v-btn block color="warning">
                <span class="material-symbols-outlined">help</span>
            </v-btn>            
        </template>
    </v-navigation-drawer>
    `
}