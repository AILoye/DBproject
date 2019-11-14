import Vue from "vue"
import BScroll from "./bscroll"

let componentMap=[
    // Header,
    BScroll
];

componentMap.forEach(item=>{
    Vue.component(item.name,item);
})
