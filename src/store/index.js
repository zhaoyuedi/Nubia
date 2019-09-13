import Vue from "vue"
import Vuex from "vuex"
import site from './site';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        site
    }
})

export default store