export default {
  path: "/more",
  name: "more",
  meta:{
    flag:false
  },
  props:true,
  component: () => import("@pages/more")
};
