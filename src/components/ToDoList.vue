<template>
  <h1>任务列表</h1>
  <p><span>任务总数：{{ Lists.length }} ; 还有 ：{{count}} 未完成 ：</span> <a href="#" @click="del()">【完成】</a></p>
  <div>
    <ul>
      <li>
        <p v-for="(item,index) in Lists" :key="index" >
          <input :checked="item.active" type="checkbox" @click="aa(item,index),count1()"/>
                    <input id="tee" v-model="item.name" :class="{'de':item.active}" :readonly="item.active" type="text"/>
        </p>
      </li>
    </ul>
  </div>
  <input v-model="aaa" type="text"> <input type="button" value="添加" @click="add(),count1()">
</template>

<script>
export default {
  name: "ToDoList",
  data() {
    return {
      count: 4,
      aaa: "",
      Lists: [
        {name: "设计产品原型", active: false},
        {name: "UI设计", active: false},
        {name: "编写页面代码", active: false},
        {name: "编写js代码", active: false},
      ]
    }
  },
  methods: {
    aa(item, index) {
      if (this.Lists[index].active === true) {
        this.Lists[index].active = false
      } else {
        this.Lists[index].active = true
      }
    },
    add() {
      this.Lists.push({name: this.aaa, active: false});
      this.aaa = ""
    },
    count1(){
      var count2 = 0;
      for (var i = 0; i < this.Lists.length; i++){
        if (this.Lists[i].active === false){
          count2++;
        }
      }
      this.count = count2;
    },
    del(){
      for (var i = 0; i < this.Lists.length; i++){
        if (this.Lists[i].active === true){
          this.Lists.splice(i,1);
          //this.Lists[i].active.splice(this.Lists[i].active);
          //delete this.Lists[i]
          //this.$delete(this.Lists,1)
          //this.a.$remove
        }
      }
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}

div {
  width: 200px;
  margin: 0 auto;
  text-align: left;
  padding-left: 80px;
}

li {
  color: black;
}

a {
  text-decoration: none;
}

.de {
  text-decoration: line-through;
  color: #aaa7a7;
}

#tee {
  border: none;
  outline: none;
}
</style>