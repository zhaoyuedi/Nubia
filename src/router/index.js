import Vue from "vue";
import VueRouter from 'vue-router';
import home from './home';
import cate from './cate';
import discover from './discover';
import cart from './cart';
import mine from './mine';
Vue.use(VueRouter);

const router = new VueRouter({
    mode:"hash",
    routes:[
        {
            path:'/',
            redirect:"/home"
        },
        home,
        cate,
        discover,
        cart,
        mine
    ]
})






// 登录校验
router.beforeEach((to,from,next)=>{
  // document.title = to.meta.title;
  if(to.path!="/mine/login" && to.meta.Auth){
  //校验 校验用户是否登录
      if( localStorage.getItem('quanxian')){
            next();
       }else{
            next("/mine/login?path="+to.path)
          }
  
  }else{
  //不需要校验，可以直接进入相对应得页面
        next();
  }
  
  
  })
  

export default router