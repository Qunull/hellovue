<template>
<!--<h1>第一个</h1>
<h1>{{msg}}</h1>//双大括号可以获取插值表达式-->



  <div v-for="(item,index) in list" :key="index" STYLE="display: inline-block"
  v-on:click="ca">
    {{item.name}}
  </div>
</template>

<script>
export default {
  name: "MyVue",
  data(){
    return{//变量或者数据
      /*msg:"昊昊诱捕器",*/
      list:[{name:"HTML"},{name:"css"},{name:"javaScript"},{name:"Vue.js"}],
      methods:{
        ca(){
          "ca"
        }
      }
    }
  }
}

</script>

<style scoped>
div{
  height: 50px;
  width: 100px;
  background: #65B449;
  line-height: 50px;
  margin-left: 20px;
}
.ca{
  background: #E45885;
}
</style>