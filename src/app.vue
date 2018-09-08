
<template>
    <div class="app">
        <router-view name="audio"></router-view>
        <router-view name="header" class="header"></router-view>
        <home class="main"></home>
        <!-- <router-link to="">play</router-link>
        <router-link to="/list">list</router-link>
        <router-link to="/lrc">lrc</router-link> -->
    </div>
</template>


<script>
    import home from "./components/home.vue"
    import "./app.scss"
    export default{
        components:{
            home
        }
    }
</script>
