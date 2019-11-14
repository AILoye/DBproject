<template>
    <div>
      <mt-picker :slots="myAddressSlots" @change="onMyAddressChange"></mt-picker>
      <p>地址3级联动：{{myAddressProvince}} {{myAddressCity}} {{myAddresscounty}}</p>
    </div>
</template>

<style>
</style>

<script>
import Vue from "vue";
import { Picker } from "mint-ui";
// import myaddress from "../../city.json";
import myaddress from "../../api/city.json";
Vue.component(Picker.name, Picker);

export default {
  data() {
    return {
      myAddressSlots: [
        {
          flex: 1,//对应 slot CSS 的 flex 值
          defaultIndex: 1,//对应 slot 初始选中值，需传入其在 values 数组中的序号，默认为 0
          values: Object.keys(myaddress), //省份数组
          className: "slot1",//对应 slot 的类名
          textAlign: "center"//对应 slot 的对齐方式
        },
        {
          divider: true,//对应 slot 是否为分隔符
          content: "-",//分隔符 slot 的显示文本
          className: "slot2"
        },
        {
          flex: 1,
          values: [],
          className: "slot3",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: "slot4"
        },
        {
          flex: 1,
          values: [],
          className: "slot5",
          textAlign: "center"
        }
      ],
      myAddressProvince: "省",
      myAddressCity: "市",
      myAddresscounty: "区/县"
    };
  },
  created() {},
  methods: {
    onMyAddressChange(picker, values) {
      if (myaddress[values[0]]) {
        //这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）
        picker.setSlotValues(1, Object.keys(myaddress[values[0]])); // Object.keys()会返回一个数组，当前省的数组
        picker.setSlotValues(2, myaddress[values[0]][values[1]]); // 区/县数据就是一个数组
        //获取省
        this.myAddressProvince = values[0];
        //获取市
        this.myAddressCity = values[1];
        //获取县
        this.myAddresscounty = values[2];

        /*
            setSlotValues(index, values)：设定给定 slot 的备选值数组
        
        */
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      //vue里面全部加载好了再执行的函数 （类似于setTimeout）
      this.myAddressSlots[0].defaultIndex = 0;
      // 这里的值需要和 data里面 defaultIndex 的值不一样才能够初始化
      //因为我没有看过源码（我猜测是因为数据没有改变，不会触发更新）
    });
  }
};
</script>