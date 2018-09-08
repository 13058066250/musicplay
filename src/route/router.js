import Router from "vue-router"
import Vue from "vue"
import header from "../components/header.vue"
import audio from "../components/audio.vue"
import play from "../components/play.vue"
import home from "../components/home.vue"
import list from "../components/list.vue"
import lrc from "../components/lrc.vue"

Vue.use(Router)

export default new Router({
    mode:"history",
    routes:[
        {
            path:"/",
            components:{
                default:home,
                header:header,
                audio:audio
            },
            children:[
                {
                    path:"",
                    name:"play",
                    component:play
                },
                {
                    path:"list",
                    name:"list",
                    component:list
                },
                {
                    path:"lrc",
                    name:"lrc",
                    component:lrc
                }
            ]
        },

    ]
})