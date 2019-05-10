const state = {
  classificationConte: [],
  listDateInterfaceConte: [],
  FunctionalNavConte: [],
  DetailConte:[]
}

const mutations = {
  classification(state, payload) {
    state.classificationConte = payload
  },
  listDateInterface(state, payload) {
    state.listDateInterfaceConte = [...state.listDateInterfaceConte, ...payload]
  },
  FunctionalNav(state, payload) {
    state.FunctionalNavConte = payload
  },
  Detail(state, payload) {
    console.log(payload,'detail')
    state.DetailConte = payload
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
