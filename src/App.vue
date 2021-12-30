<template>
  <!--  <img alt="Vue logo" src="./assets/logo.png">-->
  <!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <!--  <MyVue></MyVue>-->
  <!--  <Nav></Nav>-->
  <!--  <News></News>-->
  <ToDoList></ToDoList>
</template>

<script>
/*import HelloWorld from './components/HelloWorld.vue'*/
/*import MyVue from "@/components/MyVue";*/
/*import Nav from "@/components/Nav";*/
/*import News from "@/components/News";*/
import ToDoList from "@/components/ToDoList";

export default {
  name: 'App',
  components: {
    ToDoList
    /* HelloWorld,*/
    /*MyVue,*/
    /*Nav*/
    /*News*/
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
