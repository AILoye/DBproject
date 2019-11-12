export default {
    name:"movie",
    path:"/movie",
    component:_=>import("@pages/movie"),
    meta:{
        flag:true,
        requiredAuth:false
    },
    children:[
        {
            path:"/movie",
            redirect:"/movie/movienow"
        },
        /**正在热映 */
        {
            name:"movienow",
            path:"movienow",
            component:_=>import("@components/movienow"),
            meta:{
                flag:true,
                requiredAuth:false
            },
        },
        /**即将上映 */
        {
            name:"moviecomming",
            path:"moviecomming",
            component:_=>import("@components/moviecomming"),
            meta:{
                flag:true,
                requiredAuth:false
            },
        },
        /**豆瓣热门 */
        {
            name:"moviehot",
            path:"moviehot",
            component:_=>import("@components/moviehot"),
            meta:{
                flag:true,
                requiredAuth:false
            },
        },
    ]
}