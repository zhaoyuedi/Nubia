export default {
    path:"/cart",
    name:"cart",
    meta:{
        flag:false,
        Auth:false
    },
    component:()=>import("@pages/cart")
}