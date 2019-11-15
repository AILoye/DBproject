export default {
    name:"goods",
    path:"/goods/:id/:title",
    props:true,
    component:_=>import("@pages/goods"),
}