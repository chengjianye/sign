const state = {
  current: {
    company: '北京小桔科技有限公司',
    phone: '17621526605',
    address: '',
    description: ''
  },
  container: [],
  searchList: []
}

const mutations = {
  updata(state, payload) {
    console.log(payload,'payload...00')
    state.container = payload
  },
  searchList(state, payload) {
    console.log(payload,'payload...')
    state.searchList = payload
  },
  address(state, payload) {
    console.log(payload,'address...')
    state.current.address = payload
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
