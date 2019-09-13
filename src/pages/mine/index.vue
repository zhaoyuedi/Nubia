<template>
<<<<<<< HEAD
    <div id="afterSalesService">
        <div class="header">
            <span></span>售后服务
        </div>
        <div class="policy">
            <p>服务政策</p>
            <div class="policy_content">
                <a href="#">特色服务</a>
                <a href="#">售后政策</a>
            </div>
        </div>
        <!--自助服务-->
        <div class="server">
            <h3>自助服务</h3>
            <ul>
                <li><a href=""> <img src="https://oss.static.nubia.cn/upload/5af40b799bed555.png"> <span>售后网点</span> </a></li>
                <li><a href=""> <img src="https://oss.static.nubia.cn/upload/5af40b799bc3234.png"> <span>以旧换新</span> </a></li>
                <li><a href=""> <img src="https://oss.static.nubia.cn/upload/5af40b799bed555.png"> <span>真伪查询</span> </a></li>
                <li><a href=""> <img src="https://oss.static.nubia.cn/upload/5af40b799bed555.png"> <span>非保价格查询</span> </a></li>
                <li><a href=""> <img src="https://oss.static.nubia.cn/upload/5af40b799bed555.png"> <span>寄修服务</span> </a></li>
                <li><a href=""> <img src="https://oss.static.nubia.cn/upload/5af40b799bed555.png"> <span>碎屏宝</span> </a></li>
                <li><a href=""> <img src="https://oss.static.nubia.cn/upload/5af40b799bed555.png"> <span>售后订单</span> </a></li>
            </ul>
        </div>
        <div class="line"></div>
        <div class="question">
            <p>常见问题</p>
            <div>
                <a>服务问题</a>
                <a>特色服务</a>
                <a>技术问题</a>
                <a>支付及配送</a>
                <a>会员介绍</a>
                <a>牛豆说明</a>
            </div>
        </div>
        <div class="footerTel">
            <a>热线电话</a>
            <a>在线客服</a>
        </div>
    </div>
</template>
<script>
export default {
    name: "AfterSalesService"
};
</script>
<style scoped>
.header {
    height: 0.6rem;
    font-size: 0.18rem;
    line-height: 0.62rem;
    display: flex;
    color: #000;
    border-bottom: 1px solid #ccc;
}
.header span {
    width: 0.4rem;
    height: 0.6rem;
    font-size: 0.2rem;
    display: inline-block;
    background: url("https://oss.static.nubia.cn/upload/5b1a23bd5617997.png") no-repeat center center;
    background-size: 0.1rem 0.18rem;
}
.policy {
    height: 1.26rem;
    padding: 0.18rem 0;
    border-bottom: 0.1rem solid #f8f8f8;
}
.policy p {
    height: 0.2rem;
    line-height: 0.2rem;
    padding: 0 0.22rem;
    font-weight: 600;
    font-size: 0.14rem;
}
.policy_content {
    height: 100%;
    font-size: 0.16rem;
    padding: 0.22rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.policy_content a {
    display: inline-block;
    width: 1.49rem;
    height: 0.7rem;
    background: url(https://oss.static.nubia.cn/upload/5b1a23bd5617997.png)
        no-repeat 20px center;
    background-size: 24px;
    position: relative;
    line-height: 0.7rem;
    padding-left: 0.56rem;
    font-size: 0.16rem;
    color: #333;
}
.policy_content a:nth-of-type(2) {
    background: url(https://oss.static.nubia.cn/upload/5b1a23bd37fe56.png)
        no-repeat 20px center;
    background-size: 24px;
}
.server {
    height: 2.01rem;
    font-size: 0.1rem;
    padding: 0.18rem 0;
}
.server h3 {
    height: 0.2rem;
    line-height: 0.2rem;
    padding: 0 0.22rem;
    font-weight: 600;
    font-size: 0.14rem;
}
.server ul {
    margin-top: 0.3rem;
    height: 1.15rem;
    font-size: 0.1rem;
    display: flex;
    flex-wrap: wrap;
}
.server ul li {
    width: 0.92rem;
    height: 0.48rem;
    margin-bottom: 0.2rem;
    text-align: center;
    float: left;
}
.server img {
    width: 0.26rem;
    height: 0.26rem;
    margin: 0 auto;
    margin-bottom: 0.1rem;
}
.server span {
    color: #7f7f7f;
    font-size: 0.12rem;
}
.line {
    height: 0.1rem;
    background: #f8f8f8;
}
.question {
    padding-top: 0.18rem;
    border-bottom: 10px solid #f8f8f8;
    margin-bottom: 0.52rem;
}
.question p {
    height: 0.2rem;
    line-height: 0.2rem;
    padding: 0 0.22rem;
    font-weight: 600;
    font-size: 0.14rem;
}
.question a {
    display: block;
    height: 0.4rem;
    line-height: 0.4rem;
    font-size: 0.13rem;
    padding-left: 0.25rem;
    border-bottom: 1px solid #e7e7e7;
    color:#000;

}
.question div {
    padding-top: 0.1rem;
}
.footerTel {
    width: 100%;
    height: 0.52rem;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.footerTel a {
    width: 50%;
    height: 100%;
    font-size: 0.14rem;
    line-height: 0.52rem;
    padding-left: 0.825rem;
    background: #fff url(https://oss.static.nubia.cn/upload/5b1a23bd3659b39.png)
        no-repeat 30% center;
    background-size: 20px;
    border-right: 1px solid #ddd;
    color:#000;

=======
  <div>
    <router-view></router-view>
    <section class="bgColor">
      <!-- 头部 -->
      <div class="mineHeader commona">
        <div class="mineInfo">
          <a href>
            <img src="../../../public/img/message.png" alt />
          </a>

          <!-- 头像以及信息 -->
          <div class="headImg">
            <div class="headImgBox"></div>
            <div class="headInfoBox">
              <router-link 
                to="/mine/login"
                tag="div"
              class="headInfoTop">登录/注册</router-link>
              <div class="headInfoBottom">普通会员</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 优惠券 -->
      <div class="ticket">
        <ul>
          <li>
            <p class="count">0</p>
            <span class="text">优惠券</span>
          </li>
          <li>
            <p class="count">￥0</p>
            <span class="text">回收代金券</span>
          </li>
          <li>
            <p class="count">0</p>
            <span class="text">收藏</span>
          </li>
          <li>
            <p class="count">0</p>
            <span class="text">积分</span>
          </li>
        </ul>
      </div>

      <!-- Mind 订单 -->
      <div class="mineOrder">
        <div class="my_order">
          <div class="myOrderLeft">我的订单</div>
          <div class="myOrderRight">
            <a href>查看详情</a>
          </div>
        </div>
        <ul>
          <router-link to="/mine/order" tag="li">
            <img src="../../../public/img/order1.png" alt />
            <span>待付款</span>
          </router-link>
          <router-link to="/mine/order" tag="li">
            <img src="../../../public/img/order2.png" alt />
            <span>待收货</span>
          </router-link>
          <router-link to="/mine/order" tag="li">
            <img src="../../../public/img/order3.png" alt />
            <span>已完成</span>
          </router-link>
          <router-link to="/mine/order" tag="li">
            <img src="../../../public/img/order4.png" alt />
            <span>回收订单</span>
          </router-link>
        </ul>
      </div>

      <!-- Mind 工具 -->
      <div class="mineOrder">
        <div class="my_order">
          <div class="myOrderLeft">我的工具</div>
        </div>
        <ul>
          <li>
            <img src="../../../public/img/tools1.png" alt />
            <span>会员中心</span>
          </li>
          <li>
            <img src="../../../public/img/tools2.png" alt />
            <span>收货地址</span>
          </li>
          <li>
            <img src="../../../public/img/tools3.png" alt />
            <span>我的预约</span>
          </li>
          <li>
            <img src="../../../public/img/tools4.png" alt />
            <span>NB码</span>
          </li>
          <li>
            <img src="../../../public/img/tools5.png" alt />
            <span>专属勋章</span>
          </li>
        </ul>
      </div>

      <!-- Mind 服务 -->
      <div class="mineOrder">
        <div class="my_order">
          <div class="myOrderLeft">售后服务</div>
          <div class="myOrderRight">
            <a href>查看详情</a>
          </div>
        </div>
        <ul>
          <li>
            <img src="../../../public/img/fuwu1.png" alt />
            <span>售后网点</span>
          </li>
          <li>
            <img src="../../../public/img/fuwu2.png" alt />
            <span>以旧换新</span>
          </li>
          <li>
            <img src="../../../public/img/fuwu3.png" alt />
            <span>真伪查询</span>
          </li>
          <li>
            <img src="../../../public/img/fuwu4.png" alt />
            <span>非保价格查询</span>
          </li>
          <li>
            <img src="../../../public/img/fuwu5.png" alt />
            <span>寄修服务</span>
          </li>
          <li>
            <img src="../../../public/img/fuwu6.png" alt />
            <span>意外报站服务</span>
          </li>
          <li>
            <img src="../../../public/img/fuwu7.png" alt />
            <span>售后订单</span>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Mine"
};
</script>
<style>
.bgColor {
  background: #f5f5f5;
  padding-bottom: 0.56rem;
}
.mineHeader {
  width: 100%;
  height: 1.24rem;
  background: url("../../../public/img/mineHeader.png") no-repeat center center;
  background-size: 100% 100%;
  padding: 0.15rem;
}
.commona {
  background-color: #000;
}
.mineInfo {
  width: 100%;
  height: 0.25rem;
}
.mineInfo a {
  width: 100%;
  height: 0.25rem;
  display: flex;
  justify-content: flex-end;
}
.mineInfo a img {
  width: 0.25rem;
  height: 0.25rem;
}
.headImg {
  width: 100%;
  height: 0.8rem;
  display: flex;
}
.headImgBox {
  width: 0.6rem;
  height: 0.6rem;
  background: url("../../../public/img/HeadImg.png") center center no-repeat;
  background-size: 100% 100%;
  border-radius: 50%;
  border: 1px solid #ccc;
}

.headInfoTop {
  width: 0.72rem;
  height: 0.2rem;
  font-size: 0.16rem;
  line-height: 0.26rem;
  color: #fff;
}
.headInfoBottom {
  width: 1rem;
  height: 0.2rem;
  border: 1px solid #ccc;
  border-radius: 0.1rem;
  font-size: 0.12rem;
  padding: 0 0.1rem 0 0.2rem;
  background: url("../../../public/img/xingxing.png") no-repeat left center;
  background-size: 25% 40%;
  line-height: 0.2rem;
  text-align: center;
  color: #fff;
}

/* 优惠券 */
.ticket {
  width: 100%;
  height: 0.74rem;
  padding: 0.14rem 0 0.04rem;
  background: #fff;
}
.ticket ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
}
.ticket ul li {
  width: 0.938rem;
  height: 0.56rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.ticket ul li p {
  font-size: 0.18rem;
  text-align: center;
}
.ticket ul li span {
  font-size: 0.12rem;
  text-align: center;
  color: #7f7f7f;
}

/* mine Order */
.mineOrder {
  width: 100%;
  min-height: 1.45rem;
  margin-top: 0.1rem;
  padding: 0.18rem 0 0.13rem;
  background: #fff;
  overflow: hidden;
}
.my_order {
  width: 100%;
  height: 0.2rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.22rem;
}
.my_order .myOrderLeft {
  font-size: 0.18rem;
  color: #000;
  line-height: 0.2rem;
  font-weight: 6rem;
}
.myOrderRight {
  font-size: 0.14rem;
  background: url("../../../public/img/right.png") no-repeat center right;
  width: 0.76rem;
  background-size: 0.12rem;
  padding-right: 0.2rem;
}
.myOrderRight a {
  color: #7f7f7f;
}
.mineOrder > ul {
  width: 100%;
  height: 0.64rem;
  font-size: 0.12rem;
  color: #7f7f7f;
  padding: 0.18rem 0 0.13rem;
}
.mineOrder > ul li {
  width: 0.93rem;
  height: 0.64rem;
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0.1rem;
}
.mineOrder > ul li img {
  width: 0.4rem;
  height: 0.4rem;
}
.mineOrder > ul li span {
  margin-top: 0.06rem;
  width: 100%;
  text-align: center;
>>>>>>> c62495f6bddf5dd148cbb864e093733cd05a5c60
}
</style>