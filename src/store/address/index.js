import {addressApi} from "@api/address";

 let state = {
   //从缓存中取
        cityList:JSON.parse(sessionStorage.getItem("cityList"))||[],
        hotCity:JSON.parse(sessionStorage.getItem("hotCity"))||[],
        cityId:sessionStorage.getItem("cityId")||1,
        nm:sessionStorage.getItem("nm")||"北京"
  }

 let actions = {//vuex中请求数据
        async handleAsyncGetAddress({commit}){
         let data = await addressApi();
        //  console.log(data);

         commit("handleGetCity",data.data.cities)

        }
  }
 let mutations={

      //修改数据
      handleUpdateCity(state,params){
          state.cityId=params.id;
          state.nm=params.nm;
      },


      handleGetCity(state,cities){
      // console.log(cities);
      let hotCity=[],cityList=[];

    // 热门城市
    //     hotCity=[
    //         {
    //             id:"",   nm:""
    //         }
    //     ]
        for(var i=0;i<cities.length;i++){
            if(cities[i].isHot){
                hotCity.push({id:cities[i].id,nm:cities[i].nm});
            }
        }
        // console.log(hotCity)
    // 城市列表
    //     cityList=[
    //         {
    //             index:A,
    //             list:[id:"",nm:""]
    //         },
    //         {
    //             index:B,
    //             list:[]
    //         },
    //     ]
    //     //城市列表
        for(var i=0;i<cities.length;i++){
            let letterFirst=cities[i].py.slice(0,1).toUpperCase();
            if(isCityList(letterFirst)){
                //不存在时
                cityList.push({index:letterFirst,list:[{id:cities[i].id,nm:cities[i].nm}]})
            }
            else{
                //存在
                for(var j=0;j<cityList.length;j++){
                    if(cityList[j].index==letterFirst){
                        cityList[j].list.push({id:cities[i].id,nm:cities[i].nm});
                        break;
                    }
                }
            }
        }
        //城市列表的标识
        function isCityList(letterFirst){
          var flag=true;
          for(var i=0;i<cityList.length;i++){
            if(cityList[i].index==letterFirst){
              flag=false;
              break;
            }
          }
          return flag;
        }
        // console.log(cityList)

        //字典排序
        cityList.sort((a,b)=>{
          if(a.index>b.index){
            return 1;

          }else{
            return -1;
          }
        })
        // console.log(cityList)
        state.cityList=cityList;
        state.hotCity=hotCity;
        console.log(state.cityList)
        // console.log(state.hotCity)
        //存到sessionStorage中（优化）
        sessionStorage.setItem("cityList",JSON.stringify(cityList));
        sessionStorage.setItem("hotCity",JSON.stringify(hotCity))
      }


  }





export default {
    state,
    actions,
    mutations,
    namespaced:true
}