 import MessageBox from "./index.vue";
import Vue from "vue";

export default(function(){
    var defaultVal={
        title:"提示",
        content:"内容"
    }
    let MessageBoxFn=Vue.extend(MessageBox);

    return (options)=>{//options 用户传进来的
        for(var key in options){
            defaultVal[key]=options[key];
        }
        let messageBoxVm=new MessageBoxFn({
            el:document.createElement("div"),
            data:{
                title:defaultVal.title,
                content:defaultVal.content
            },
            methods:{
                handleDel(){
                    document.body.removeChild(messageBoxVm.$mount().$el);
                },
                handleOk(){
                    defaultVal.handleOk && defaultVal.handleOk
                    document.body.removeChild(messageBoxVm.$mount().$el)
                }
            }
        })
        document.body.appendChild(messageBoxVm.$mount().$el)
    }
})()