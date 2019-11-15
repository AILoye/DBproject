import LoadingView from "./index.vue";
import Vue from "vue";

// console.log(LoadingView)//是一个对象

class JSloading{
    constructor(){
        let LoadingFn=Vue.extend(LoadingView);
        // console.log(LoadingFn)
        //输出的是继承下来的一个 vue 的子类
       this.loadingVm=new LoadingFn({//loadingVm当前子类的实例
            el:document.createElement("div")//重新生成一个挂载点
       })
    //    console.log(this.loadingVm)
        //loadingVm 和vue 一摸一样
    //    console.log(this.loadingVm.$mount().$el)
    //获取挂载点
   
    }

    loadingMount(){
        document.body.appendChild(this.loadingVm.$mount().$el)
    }
    loadingDestroy(){
        document.body.removeChild(this.loadingVm.$mount().$el);
    }
}
export default new JSloading();
//数据请求的时候出现，数据请求到消失 ---->reques.js





/** 
 *      // console.log(LoadingFn)
        //输出的是继承下来的一个 vue 的子类
        //new 的时候不用非得 在App中使用
*/
