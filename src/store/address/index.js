import {addressApi} from "@api/address"

 let state = {
        // cityList:JSON.parse(sessionStorage.getItem("cityList"))||[],
        // hotCity:JSON.parse(sessionStorage.getItem("hotCity"))||[],
        // cityId:sessionStorage.getItem("cityId")||1,
        // nm:sessionStorage.getItem("nm")||"北京"
  }

 let actions = {//vuex中请求数据
        async handleAsyncGetAddress(){
         let data = await addressApi();
         console.log(data)

        }
  }
 let mutations={
    // handleAsyncGetAddress(state,cities){
    //     console.log(cities);
    //     let hotCity=[],cityList=[];

    //     //热门城市
    //     hotCity=[
    //         {
    //             id:"",
    //             nm:""
    //         }
    //     ]
    //     for(var i=0;i<cities.length;i++){
    //         if(cities[i].isHot){
    //             hotCity.push({id:cities[i].id,nm:cities[i].nm});
    //         }
    //     }
    //     console.log(hotCity)
    //     //城市列表
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
    //     //热门城市
    //      for(var i=0;i<cities.length;i++){
    //         if(cities[i].isHot){
    //             hotCity.push({id:cities[i].id,nm:cities[i].nm});
    //         }
    //     }
    //     //城市列表
    //     for(var i=0;i<cities.length;i++){
    //         let letterFirst=cities[i].py.slice(0,1).toUpperCase();
    //         if(isCityList(letterFirst)){
    //             //不存在时
    //             cityList.push({index:letterFirst,list:[{id:cities[i].id,nm:cities[i].nm}]})
    //         }
    //         else{
    //             //存在
    //             for(var j=0;j<cityList.length;j++){
    //                 if(cityList[j].index==letterFirst){
    //                     cityList[j].list.push({id:cities[i].id,nm:cities[i].nm});
    //                     break;
    //                 }
    //             }
    //         }
    //     }
    //    }


  }





export default {
    state,
    actions,
    // mutations,
    namespaced:true
}