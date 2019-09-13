export default {
  path: "/mine",
  name: "mine",
  meta: {
    flag: true
  },
  component: () => import("@pages/mine"),
  children: [
    {
      path: "order",
      name: "order",
      meta: {
        flag: false
      },
      component: () => import("@components/orderAll")
    },
    {
      path: "login",
      name: "login",
      meta: {
        flag: false
      },
      component: () => import("@components/login"),
      children: [
        {
          path: "regist",
          name: "regist",
          meta: {
            flag: false
          },
          component: () => import("@components/regist")
        }
      ]
    },

    //收货地址
    {
      path: "site",
      name: "site",
      meta: {
        flag: false
      },
      component: () => import("@components/site")
    },
    //编辑城市信息
    {
      path: "compile/:id/:index",
      name: "compile",
      meta: {
        flag: false,
      },
      component: () => import("@components/compile")
    }
  ]
};
