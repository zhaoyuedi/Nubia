<template>
  <div>
    <section class="bgColor">
      <div class="cartHeader">
        <div class="headerLeft"></div>购物车
        <!-- <div class="cartTittle">购物车

        </div>-->
        <div class="cartMenu iconfont icon-wode"></div>
      </div>

      <div class="orderProTop" v-for="(item,index) in goods" :key="index">
        <div class="orderProtopLeft">
          <img :src="item.img" />
        </div>
        <div class="orderProtopRight">
          <div class="cartProRT">
            <div class="cartRTT">
              <div class="cartRTTL">{{item.name}}{{item.size}}{{item.color}}</div>
              <div class="cartRTTR">
                <img src="../../../public/img/close_btn.png" alt />
              </div>
            </div>
            <div class="catrRTB">
              售价:￥
              <span>{{item.price}}</span>元
            </div>
          </div>

          <div class="cartProRB">
            <div class="cartProRBL">
              <button @click="handleReducer()">-</button>
              <input type="text" :value="item.num" />
              <button @click="hanleAdd()">+</button>
            </div>
            <div class="cartProRBR">
              小计:￥
              <span>{{item.num * item.price}}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="sumPrice">
        金额合计:
        <div class="sumPR">
          ￥
          <span>{{goodsPrice.goodsPriceSum}}</span>
        </div>
      </div>

      <div class="tuijian">为您推荐</div>
      <div class="zhifu">
        <div class="zhifuBtn">去结算</div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  name: "Cart",
  computed: {
    ...mapState({
      goods: state => state.goods
    }),
    ...mapGetters({
      goodsPrice:"goodsPrice"
    })
  },
  methods: {
    ...mapMutations({
      handleGoodsChange: "handleGoodsChange",
      handleReducer: "handleReducer",
      handleAdd: "handleAdd"
    })
  }
};
</script>
<style scoped>
.bgColor {
  width: 100%;
  height: 6.67rem;
  background: #f5f5f5;
  padding-bottom: 0.7rem;
  overflow: auto;
}
.cartHeader {
  width: 100%;
  height: 0.51rem;
  border-bottom: 1px solid #ccc;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.2rem;
}
.headerLeft {
  width: 0.2rem;
  height: 0.2rem;
  margin-left: 0.1rem;

  background: url("../../../public/img/left.png") no-repeat center;
}
.cartMenu {
  width: 0.3rem;
  height: 0.3rem;
  margin-left: 0.1rem;
  font-size: 0.2rem;
  line-height: 0.3rem;
  /* vertical-align: middle; */
}
.orderProTop {
  width: 100%;
  height: 1.09rem;
  border-bottom: 1px soid #ccc;
  background: #fff;
  overflow: hidden;
  display: flex;
}
.orderProtopLeft {
  width: 0.9rem;
  height: 100%;
}
.orderProtopLeft img {
  width: 0.68rem;
  height: 0.68rem;
  display: block;
  margin: 0.08rem;
}
.orderProtopRight {
  flex: 1;
  height: 100%;
}
.cartProRT {
  width: 100%;
  height: 0.6rem;
  border-bottom: 1px solid #ccc;
}
.cartProRB {
  width: 100%;
  height: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cartRTT {
  width: 100%;
  height: 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cartRTTL {
  font-size: 0.14rem;
  color: #434343;
}
.cartRTTR {
  width: 0.28rem;
  height: 0.28rem;
  margin: 0.06rem 0.06rem 0 0;
}
.cartRTTR img {
  width: 100%;
  height: 100%;
}
.catrRTB {
  font-size: 0.14rem;
  color: #87888c;
  line-height: 0.35rem;
}
.cartProRBL {
  width: 1.43rem;
  height: 0.5rem;
  font-size: 0.13rem;
  color: #2c2c2c;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.cartProRBL button,
input {
  background: #fff;
  border: 1px solid #ccc;
  outline: none;
}
.cartProRBL button {
  width: 0.3rem;
  height: 0.3rem;
  text-align: center;
  line-height: 0.3rem;
}
.cartProRBL input {
  width: 0.4rem;
  height: 0.3rem;
  text-align: center;
  line-height: 0.3rem;
}
.cartProRBR {
  text-align: center;
  line-height: 0.3rem;
  font-size: 0.13rem;
  margin-right: 0.1rem;
}
.sumPrice {
  width: 100%;
  height: 0.45rem;
  line-height: 0.45rem;
  font-size: 0.18rem;
  text-align: center;
  float: left;
  background: #fff;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
}
.sumPR {
  width: 0.7rem;
  float: right;
  margin-right: 0.2rem;
  color: #e60012;
}
.tuijian {
  width: 100%;

  padding-left: 0.1rem;
  color: #000;
  font-size: 0.16rem;
  line-height: 0.5rem;
  background: #fff;
}
.zhifu {
  width: 100%;
  height: 0.7rem;
  position: fixed;
  bottom: 0;
  border-top: #ccc 1px solid;
  background: #fff;
}
.zhifuBtn {
  width: 3.3rem;
  height: 0.44rem;
  background: #ff4d4d;
  text-align: center;
  line-height: 0.44rem;
  font-size: 0.17rem;
  color: #fff;
  margin: 0.1rem auto;
  border-radius: 0.44rem;
}
</style>