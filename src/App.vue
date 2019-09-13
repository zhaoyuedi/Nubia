<template>
  <div id="app">
    <router-view></router-view>
    <Nubia-tabBar v-if="$route.meta.flag"/>
  </div>
</template>

<script>
import TabBar from '@components/tabBar';
export default {
  name:"App",
  components:{
    [TabBar.name]:TabBar
  }
};
</script>
<<<<<<< HEAD
<style>
#app{
  height: 100%;
}
=======
<style scoped>
  #app{
    height: 100%;
  }
>>>>>>> c62495f6bddf5dd148cbb864e093733cd05a5c60
</style>
