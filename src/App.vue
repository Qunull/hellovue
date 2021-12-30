<template>
  <div id="app">
    <div><!--   1.支持路由 2.点击内容的时候 跳转到该路由对应的组件中-->
      <!--      <router-link to="/nav">导航</router-link>
         &&
            <router-link to="/ToDoList">任务列表</router-link>-->
      <span @click="toNav()"> 导航</span> && <span @click="toDoList()">任务列表</span>
    </div>
    <!-- 用路由配置的页面可以显示在此位置-->
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {},
  methods: {
    //编程式路由
    toNav(){
    this.$router.push({path:"Nav"});
  },
  toDoList() {//replace不会留下历史记录
    this.$router.replace({path: "ToDoList"});
  }
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
