import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions: {
    changeCity (ctx, city) {
      ctx.commit('changeCity', city)
    }
  },
  mutations,
  getters: {   // 类似于组件中的computed计算属性
    doubleCity (state) {
      return state.city + " " + state.city
    }
  }
})
