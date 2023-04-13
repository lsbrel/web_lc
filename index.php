<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Joga - PG</title>
    <!-- Bootstrap 5 -->
    <!-- <link rel="stylesheet" href="./resources/bootstrap/bootstrap.min.css" /> -->
     <!-- css de transition-->
    <link rel="stylesheet" href="./lib/css/transitions.css" />
    <!-- css de utilities -->
    <link rel="stylesheet" href="./lib/css/utilities.css" />
    <!-- Material Icons -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <!-- Axios -->
    <script src="./resources/axios/axios.min.js"></script>
</head>

<body>
    <!-- Compoennte principal do vuejs -->
    <v-app id="app">
        <v-layout>
            <!-- Componente de Appbar -->
            <app-bar></app-bar>
            <!-- Componentes Main que passam por transiçoes -->
            <v-main>
                <router-view v-slot="{ Component }">
                    <transition mode="out-in" name="slide-fade">
                        <component :is="Component" />
                    </transition>
                </router-view>
            </v-main>
        </v-layout>
    </v-app>
</body>
<!-- Arquivo principal do vuejs -->
<script type="module" src="./index.js"></script>
<!-- VUE e VUETIFY -->
<link rel="stylesheet" href="./resources/vue/vuetify.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />
<script src="./resources/vue/vue.global.prod.js"></script>
<script src="./resources/vue/vuetify.min.js"></script>
<script src="./resources/vue/vue-router.js"></script>
</html>