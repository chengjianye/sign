import { homeDate,bannerDate,hotDate,searchDate } from '@/api/index'

const state = {
    homeCont:[],
    bannerImg:{},
    hotText:[],
    searchCont:[],
    listConte:[]
}

const mutations = {
    homeListDate(state,payload){
        state.homeCont = payload
    },
    bannerListDate(state,payload){
        state.bannerImg = {...state.bannerImg,...payload}
    },
    hotDateLists(state,payload){
        state.hotText = payload
    },
    searchDateList(state,payload){
        state.searchCont = payload
    },
    listDatePage(state,payload){
        state.listConte = payload
    }
}

const actions = {
    async homeList({ commit, state }, payload){
        return new Promise(async (resolve, reject) => {
           let result = await homeDate(payload)
           commit('homeListDate',result.data.recommends)
        })
      },
    async bannerList({commit},payload){
        return new Promise(async (resolve,reject)=>{
            let result = await bannerDate(payload)
            commit('bannerListDate',result.data.legaowei.template1.model3)
        })
    },
    async hotList({commit},payload){
        return new Promise(async (resolve,reject) => {
            let result = await hotDate()
            commit('hotDateLists',result.data)
        })
    },
    async searchList({commit},payload){
        return new Promise(async (resolve,reject)=>{
            let result = await searchDate(payload)
            commit('searchDateList',result.data)
        })
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}