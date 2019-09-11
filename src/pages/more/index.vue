<template>
  <div>
    <div class="product">
      <ul>
        <li>综合</li>
        <li class="price">
          <span>价格</span>
        </li>
        <li class="filter">
          <span>筛选</span>
        </li>
        <li class="type">
          <p></p>
        </li>
      </ul>
    </div>
    <div class="wraplist">
      <div>
        <ul>
          <!-- <li>
            <div class="left">
              <img src alt />
            </div>
            <div class="right">
              <p class="info">红魔3S&nbsp;银色风暴&nbsp;8GB+128GB</p>
              <div class="bottom">
                <span>¥</span>
                <span class="price">2999</span>
              </div>
            </div>
          </li>-->
          <li v-for="(item,index) in list" :key="index">
            <div class="left">
              <img :src="item.image | getImg()" alt />
            </div>
            <div class="right">
              <p class="info">红魔3S&nbsp;银色风暴&nbsp;8GB+128GB</p>
              <div class="bottom">
                <span>¥</span>
                <span class="price">2999</span>
                <span class="member_1">¥</span>
                <span class="member_2">2499</span>
                <span class="vip">会员价</span>
              </div>
            </div>
          </li>
        </ul>
        <div class="bottom">
          <p>没有更多啦~</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getMoreList } from "@api";
export default {
  name: "More",
  async created() {
    let list = await getMoreList(this.num, this.id);
    this.list = list;
  },
  data() {
    return {
      list: []
    };
  },
  props: {
    id: {
      type: Number
    },
    num: {
      type: Number
    }
  },
filters: {
    getImg(value) {
      return "//oss.static.nubia.cn/" + value;
    }
  }
};
</script>
<style scoped>
body {
  font-family: Arial, Verdana, Sans-serif;
}
.product {
  height: 0.4rem;
  width: 100%;
}
.product ul {
  display: flex;
  justify-content: start;
}
.product li {
  height: 0.4rem;
  width: 0.8rem;
  text-align: center;
  line-height: 0.4rem;
  font-size: 0.15rem;
}
.product ul li span {
  width: 0.168rem;
}
.product .type {
  flex: 1;
}

.product ul .price span::after {
  content: " ";
  position: relative;
  display: inline-block;
  width: 0.15rem;
  height: 0.15rem;
  background: url(//shop-soa-static.nubia.com/images/sortNone.png) 0 center
    no-repeat;
  background-size: 0.15rem 0.15rem;
}
.product ul .filter span::after {
  content: " ";
  display: inline-block;
  height: 0.15rem;
  width: 0.15rem;
  background: url(//shop-soa-static.nubia.com/images/sortNone.png) 0 center
    no-repeat;
  background-size: 0.15rem 0.15rem;
}
.product ul .type p {
  width: 0.55rem;
  height: 100%;
  background: url(//shop-soa-static.nubia.com/images/sortNone.png) no-repeat
    right 14px center;
  background-size: 0.22rem;
  float: right;
}
.wraplist ul li {
  height: 1.12rem;
  width: 100%;
  display: flex;
  justify-content: start;
}
.wraplist .left {
  width: 1.12rem;
  height: 1.12rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wraplist .left img {
  width: 0.95rem;
  height: 0.95rem;
}
.wraplist .right {
  flex: 1;
  height: 100%;
  padding: 0.176rem 0;
  position: relative;
}
.wraplist .right .info {
  font-size: 0.1625rem;
  color: #000000;
  font-weight: 700;
  line-height: 0.224rem;
  padding-right: 0.16rem;
  position: absolute;
  top: 0.176rem;
}
.wraplist .right span {
  color: rgb(255, 94, 94);
  font-size: 0.12rem;
}
.wraplist .right .price {
  font-size: 0.165rem;
}
.wraplist .right .bottom {
  position: absolute;
  bottom: 0.176rem;
}
.wraplist .right .bottom .member_1 {
  color: rgb(139, 139, 139);
}
.wraplist .right .bottom .member_2 {
  color: rgb(139, 139, 139);
  font-size: 0.165rem;
}
.wraplist .right .bottom .vip {
  background: #ff8d00;
  color: #ffffff;
  padding: 2px 4px;
  border-radius: 3px;
  position: relative;
  bottom: 3px;
}
.wraplist > div > .bottom {
  height: 0.3rem;
  width: 100%;
  text-align: center;
  line-height: 0.3rem;
  color: #9c9c9c;
  background: #eeeeee;
}
</style>