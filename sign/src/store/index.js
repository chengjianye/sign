import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

// 挂载modules
import index from './modules/index'
import interView from './modules/interView'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {  
    index,
    interView
  },
  state: {
    info: {
      phone: "18801052925",
      openid: "oUy9p5PTxwYaLmwBn41pn0HzNM1U"
    } //用户信息
  },
  mutations: {
    updataState(state, payload) {
      state.info = payload
    }
  },
  plugins: [createLogger()]
})
