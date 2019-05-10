import Vue from 'vue';
import Vuex from 'vuex';
import createLogge from 'vuex/dist/logger';

import index from './modules';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    index
  },
  plugins: [createLogge()]
})
