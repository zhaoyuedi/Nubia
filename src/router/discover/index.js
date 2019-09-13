export default {
<<<<<<< HEAD
    path: "/discover",
    name: "discover",
    component: () => import("@pages/discover"),
    children: [
        {
            path: "/discover",
            redirect: "/discover/hotReview"
        },
        {
            path: "hotReview",
            name: "hotReview",
            component: () => import("@components/discoverHotReview")
        },
        {
            path: "experience",
            name: "experience",
            component: () => import("@components/discoverExperience")
        },
        {
            path: "newsCenter",
            name: "newsCenter",
            component: () => import("@components/discoverNewsCenter")
        },
        {
            path: "video",
            name: "video",
            component: () => import("@components/discoverVideo")
        },

    ]
=======
    path:"/discover",
    name:"discover",
    meta:{
        flag:false
    },
    component:()=>import("@pages/discover")
>>>>>>> c62495f6bddf5dd148cbb864e093733cd05a5c60
}