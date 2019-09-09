<template>
  <div id="list">
    <div class="list" v-for="(item) in Infos">
      <p>
        <i></i>
        <span>{{item.cate_name}}</span>
        <i></i>
      </p>
      <ul>
        <li v-for="(items) in item.infos ">
          <a href="#">
            <img :src="items.image_id | getImg()" alt />
            <p>{{items.product_name}}&nbsp;{{items.color_name}}</p>
          </a>
        </li>
      </ul>
      <p class="check_more">
        <a href="#">查看更多红魔</a>
      </p>
    </div>
  </div>
</template>
<script>
import { getTypeList } from "@api";
import filter from "@common";

export default {
  name: "cateRight",
  async created() {
    let data = await getTypeList();
    this.Infos = data.data.result;
    this.$observer.$on("handlerClick",value=>{
        console.log(value)
    })
  },
  data() {
    return {
      Infos: []
    };
  },
   filters: {
    getImg(value) {
      return "//oss.static.nubia.cn/" + value;
    }
  }
};
</script>
<style scoped>
#list {
  float: right;
  width: 70%;
  right: 0px;
  margin-top: 80px;
  margin-bottom: 80px;
}

#list .list > p {
  color: #191919;
  line-height: 50px;
  text-align: center;
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
}

#list .list p i {
  width: 22%;
  display: block;
  border-bottom: 1px solid rgb(170, 170, 170);
}

#list .list p span {
  font-size: 18px;
  margin: 0 10px;
}

#list .list ul {
  display: flex;
  padding: 0 17px;
  flex-wrap: wrap;
}

#list .list ul li {
  margin: 5px 0 5px 0;
}

#list .list ul li a img {
  height: 105px;
  width: 105px;
}

#list .list ul li a p {
  color: #666666;
  text-align: center;
  margin: 12px 0 0;
  font-size: 0.1rem;
  width: 105px;
}

#list .list .check_more {
  height: 30px;
}

#list .list .check_more a {
  color: #9c9c9c;
  font-size: 10px;
  height: 30px;
  line-height: 30px;
}

.img img {
  width: 375px;
  height: 275px;
}
</style>