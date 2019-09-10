<template>
    <div>
        <div class="header">
            <span>
                <svg class="icon"
                     style="font-size:5px"
                     aria-hidden="true">
                    <use xlink:href="#icon-back"></use>
                </svg>
            </span>
            <div class="searchBox">
                <input type="text"
                       placeholder="搜索"
                       id="search" />
            </div>
            搜索
        </div>
        <!-- <router-view></router-view> -->
        <div class="hot">
            <h3>热门搜索</h3>
            <ul class="hot_result">
                <li v-for="(item,index) in searchList"
                    :key="index">{{item.product_name}}</li>

            </ul>
        </div>
        <!--history-->
        <div class="history">
            <h3>搜索历史</h3>
        </div>

    </div>
</template>
<script>
import { searchApi } from "@api";
export default {
    name: "Find",
    data() {
        return {
            searchList: []
        };
    },
    async created() {
        let data = await searchApi();
        console.log(data.data.search_list);
        this.searchList = data.data.search_list;
    }
};
</script>
<style scoped>
.header {
    height: 0.51rem;
    line-height: 0.51rem;
    display: flex;
    color: #464646;
    font-size: 0.2rem;
    border-bottom: 1px solid #ccc;
    align-items: center;
}
.header span {
    width: 0.4rem;
    height: 0.51rem;
    font-size: 0.2rem;
    display: inline-block;
    padding-left: 0.06rem;
}
.icon {
    width: 0.3rem;
    height: 0.3rem;
    vertical-align: -8px;
    fill: currentColor;
    overflow: hidden;
}
.searchBox {
    width: 2.8rem;
    height: 0.51rem;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
    display: flex;
    align-items: center;
}
#search {
    width: 100%;
    height: 0.35rem;
    border-radius: 20px;
    font-size: 0.14rem;
    padding-left: 0.43rem;
    padding-right: 0.2rem;
    background: rgb(248, 248, 248)
        url(https://oss.static.nubia.cn/active/5c73876ac212759.png) no-repeat
        12px center;
    background-size: 20px;
    /* line-height: 35px; */
    color: rgb(115, 115, 115);
    outline: none;
    border: none;
}
.hot {
    padding: 0.25rem 0.2rem 0 0.2rem;
}
.hot h3 {
    color: rgb(156, 156, 156);
    font-size: 0.15rem;
    margin-bottom: 0.16rem;
    font-weight: normal;
}
.hot_result {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;
}
.hot_result li {
    font-size: 0.15rem;
    padding: 0.08rem;
    background: rgb(244, 244, 244);
    color: rgb(30, 30, 30);
    border-radius: 8px;
    margin-right: 8px;
    margin-bottom: 4.8px;
}
.history {
    padding: 0.25rem 0.2rem 0 0.2rem;
}
.history h3{
    color: rgb(156, 156, 156);
    font-size: 0.15rem;
    margin-bottom: 0.16rem;
    font-weight: normal;
}
</style>