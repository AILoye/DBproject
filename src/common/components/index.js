import Vue from "vue"
import BScroll from "./scroll"

let componentMap = {
    BScroll
}
componentMap.forEach(item => {
    Vue.component(item.name,item)
});