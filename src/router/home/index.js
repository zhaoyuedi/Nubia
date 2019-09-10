export default {
    path:"/home",
    name:"home",
    component:()=>import("@pages/home"),
    children: [
        {
            path: "search",
            name: "search",
            component: () => import("@components/searchPage")
        },


    ]
}