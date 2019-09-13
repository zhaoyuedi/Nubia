import Vue from "vue";
import VueRouter from 'vue-router';
import home from './home';
import cate from './cate';
import discover from './discover';
import cart from './cart';
import mine from './mine';
import search from "./searchPage";
import message from './message';
import more from './more';
Vue.use(VueRouter);

const router = new VueRouter({
    mode: "hash",
    routes: [
        {
            path: '/',
            redirect: "/home"
        },
        home,
        cate,
        discover,
        cart,
        mine,
        search,
        message,
        more
    ]
})

export default router