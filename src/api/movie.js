import http from "@utils/request"
/**正在热映 */
export const movieNowApi = (for_mobile,ck)=>http({
    method:"get",
    url:"/rexxar/api/v2/movie/modules",
    data:{
        for_mobile:for_mobile,
        ck:ck
    },
});
/**即将上映 */
export const movieCommingApi = (for_mobile,ck)=>http({
    method:"get",
    url:"/rexxar/api/v2/movie/modules",
    data:{
        for_mobile:for_mobile,
        ck:ck
    },
});
/**豆瓣热门 */
export const movieHotApi = (for_mobile,ck)=>http({
    method:"get",
    url:"/rexxar/api/v2/movie/modules",
    data:{
        for_mobile:for_mobile,
        ck:ck
    },
});
/**电影详情 */
export const movieDetailApi = (id,ck,for_mobile)=>http({
    method:"get",
    url:`/rexxar/api/v2/movie/${id}`,
    data:{
        ck,for_mobile
    },
});
/**搜索 */
export const SearchlApi = (KeyWord)=>http({
    method:"get",
    url:"/Search/SearchPanGuWordResult",
    data:{
        KeyWord:KeyWord
    },
});

// /api/v2/movie/modules?for_mobile=1&ck=HZ1f\


