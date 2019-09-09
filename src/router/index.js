import Vue from "vue";
import VueRouter from 'vue-router';
import home from './home';
import cate from './cate';
import discover from './discover';
import cart from './cart';
import mine from './mine';
Vue.use(VueRouter);

const router = new VueRouter({
    mode:"hash",
    routes:[
        {
            path:'/',
            redirect:"/cate"
        },
        home,
        cate,
        discover,
        cart,
        mine
    ]
})

export default router