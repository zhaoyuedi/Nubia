import Vue from "vue";
import Vuex from "vuex";
import peoductbuynow from "./productbuynow/index.js";

Vue.use(Vuex);

const state = {
    // 购物车总数量
    shoppingcarnum: JSON.parse(sessionStorage.getItem("shoppingcarnum")) || 0,

    //选择的数量
    productnum: 1,

    // 购物车数据

    goods: JSON.parse(sessionStorage.getItem("goods")) ? JSON.parse(sessionStorage.getItem("goods")) : [],

};

const actions = {

};

const mutations = {
    //修改
    changegoodsnum(state, props) {
        state.productnum = props;
    },

    //存num
    addgoodscarhandler(state, props) {
        state.shoppingcarnum = state.shoppingcarnum + state.productnum;
        sessionStorage.setItem("shoppingcarnum", JSON.stringify(state.shoppingcarnum));
    },

    //加购----—存
    addgoodscartmutationshandler(state, props) {
        state.goods.push(props);

        sessionStorage.setItem("goods", JSON.stringify(state.goods));
        console.log(state.goods);
    }


};
const getters = {

};
const store = new Vuex.Store({
    state,
    actions,
    mutations,
    modules: {
        peoductbuynow,
    }
})

export default store;