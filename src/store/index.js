import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        goods:[]
    },
    mutations:{
        handleGoodsChange(state,index){
            if(state.goods[index].num<=1){
                state.goods[index].num  = 1;

            }else{
                state.goods[index].num--
            }
        },
        handleAdd(state,index){
            state.goods[index].num ++
        }
    },
    actions:{
         getGoods({commit}){
          let data =this.state
          console.log(data)
        }
    },
    getters:{
        goodsPrice(state){
            let goodsCount = 0,
            goodsPriceSum = 0;
            for(var i = 0;i<state.goods.length;i++){
                goodsCount += state.goods[i].num;
                goodsPriceSum += state.goods[i].num *state.goods[i].price;

            }
            return {
                goodsCount,
                goodsPriceSum
            }
        }
    }


})

export default store