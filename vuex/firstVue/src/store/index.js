import Vuex from 'vuex'
import Vue from 'vue'


Vue.use(Vuex);   //相当于执行了Vue.protitype.$store     所以我们可以直接在组件里面直接使用$stroe
const store  = new  Vuex.Store({
  //数据初始状态
  state:{
    count : 0,
    price: 30
  },
  //提交事件
  mutations:{
    "ADD_COUNT"(state){
      state.count++
    },
    "REDUCE_COUNT"(state){
      state.count--
    },
    "CHANGE_COUNT"(state,payload){
      state.count = payload;
    }
  },
  //相当于计算的意思
  getters:{
    totalPrice(state){
      return state.count * state.price
    }
  },
  actions:{
    handleChangecount(stroe,payload){
      setTimeout(() => {
        stroe.commit('CHANGE_COUNT',payload)
      },2000)
    }
  }
})

export default store
