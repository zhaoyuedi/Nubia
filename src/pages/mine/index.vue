<template>
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

}
</style>