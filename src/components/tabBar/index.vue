<template>
    <div>
      <div class="tabBar">
          <li>
              <i class="iconfont icon-tubiao-"></i>
              <span>首页</span>
          </li>
          <li>
              <i class="iconfont icon-fenlei"></i>
              <span>分类</span>
          </li>
          <li>
              <i class="iconfont icon-faxian"></i>
              <span>发现</span>
          </li>
          <li>
              <i class="iconfont icon-gouwuche"></i>
              <span>购物车</span>
          </li>
          <li>
              <i class="iconfont icon-wode"></i>
              <span>我</span>
          </li>
          
      </div>
    </div>
</template>
<script>
export default {
    name:"Nubia-tabBar"
}
</script>
<style  scoped>
html,body{
    font-size: 26.67vw
}
.tabBar{
    width: 100%;
    height: 0.56rem;
    position: fixed;
    display: flex;
    bottom: 0;
    justify-content: space-around;
    background:#fff; 
    border-top:1px solid #ccc;
}
.tabBar li{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}
.tabBar li span{
    line-height: 0.2rem;
    font-size: 0.12rem;
    color: #ccc;
}
.tabBar li i{
    font-size: 0.2rem !important;
}
.tabBar li:nth-child(5) i{color:#ff5000;}
.tabBar li:nth-child(5) span{color:#ff5000;}
</style>