import {getSignList,listings} from '@/api/index';
const state={
    list:[],
    props:[],
    page:1,
    pageSize:8
}
const mutations={
    updateState(state, payload){
        state.list=payload
    },
    appuserState(state,payload){
        state.props=payload
    }
}
const actions={
    async getList({commit},payload){
        return new Promise(async (resolve,reject)=>{
            let result=await getSignList(payload);
            commit('updateState',result.data.result)
           
        })
    },
   async getProps({commit},payload){
        return new Promise(async (resolve,reject)=>{
            let result=await listings(payload);
             commit('appuserState',result.data.result)
            //resolve(result)
        })
    }
}
export default {
    namespaced:true,
    state,
    actions,
    mutations
}