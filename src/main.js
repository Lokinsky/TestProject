import Vue from "vue";

//import Vue from "./js/vue.js"
//import Vuex from "./js/vuex.js"
import store from "./store/index_store.js"
import index from "./components/index.vue"

new Vue({
    el:"#app",
    store,
    render: h=>h(index)

})
