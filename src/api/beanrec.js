import http from '@utils/request'

/** 
    @params:cityId  城市ID
    接口：豆瓣金典
*/ 
export const beanrec=(name,start,count)=>http({
    method:"get",
    url:"/api/v2/market/products",
    data:{
        name:name,
        start:start,
        count:count
    }
})

/** 
    @params:cityId  城市ID
    接口：家居
*/ 
export const homelife=(name,start,count)=>http({
    methods:"get",
    url:"/api/v2/market/category/travel",
    data:{
        name:name,
        start:start,
        count:count,
        
    }
})

/** 
    接口：豆品详情
*/ 
export const goodsApi = (source,start,count,product_id)=>http({
    methods:"get",
    url:"api/v2/recommend",
    data:{
        source,
        start,
        count,
        product_id

    }
})
//https://market.douban.com/api/v2/market/category/homelife?
//name=classic&start=0&count=10