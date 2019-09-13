import Vue from "vue";
import VueRouter from 'vue-router';
import home from './home';
import cate from './cate';
import discover from './discover';
import cart from './cart';
import mine from './mine';
<<<<<<< HEAD
import search from "./searchPage";
=======
import message from './message';
import more from './more';
>>>>>>> c62495f6bddf5dd148cbb864e093733cd05a5c60
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
        mine,
<<<<<<< HEAD
        search
=======
        message,
        more
>>>>>>> c62495f6bddf5dd148cbb864e093733cd05a5c60
    ]
})

export default router