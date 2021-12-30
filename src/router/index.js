import {createRouter, createWebHistory} from 'vue-router'
//引入页面模板
import Nav from "@/components/Nav"; //饿汉模式预加载
import ToDoList from "@/components/ToDoList";
import MyVue from "@/components/MyVue";
//路由规则
const routes = [
    {
        path:"/Nav",//访问路径
        name:"导航栏",
        component:Nav ,//组件
        //component: ()=>import("@/components/Nav") 组件的懒加载
        children:[{//子页面
            path:"",
            component: MyVue,
        }],
    },
    {
        path: "/ToDoList",
        name:"任务列表",
        component: ToDoList
    }
]
//创建路由
const router = createRouter({
   history:createWebHistory(),
   routes
});
//导出路由
export default router;