export default {
    
    path:"/bean",
    component:_=>import("@pages/bean"),
    name:"bean",
    children:[
        {
            path:"/bean",
            redirect:"/bean/beanrec"
        },
        {
            path:"beanrec",
            component:_=>import("@common/components/beanrec"),
            name:"beanrec"
        },
        {
            path:"homelife",
            component:_=>import("@common/components/homelife"),
             name:"homelife"
        }
    ]
}