export default {
    path:"/home",
    name:"home",
    meta:{
        flag:true,
        Auth:false
    },
    component:()=>import("@pages/home")
}