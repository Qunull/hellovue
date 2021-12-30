<template>
<table border="1">
  <tr>
    <th>新闻标题</th>
    <th>作者</th>
    <th>时间</th>
  </tr>
  <tr v-for="(item,index) in newsList" :key="index">
    <td>{{item.title}}</td>
    <td>{{item.author}}</td>
    <td>{{item.createdate}}</td>
  </tr>
</table>
</template>

<script>
import axios from "axios";

export default {
  name: "News",
  data(){
    return{
      newsList:[]
    }
  },
  //钩子函数：文件加载之后会执行
  mounted() {
    axios.post("/api/news?opr=newsList").then((res)=>{
          //res.data是自带的，至于后面怎么获取，需要根据具体的封装数据来决定
          console.log(res.data.data);
          this.newsList = res.data.data;
        }
    );
  }
}
</script>

<style scoped>

</style>