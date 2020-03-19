import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    id_card:'',
    report:'',
    session:'',
    mission:''
  },
 
  mutations: {
    setId(state,id){
      state.id_card = id
    },
    setReport (state,report){
      state.report = JSON.stringify(report),
      global.sessionStorage.setItem('report',JSON.stringify(report))
    },
    setMission(state,mission){
      state.mission = JSON.stringify(mission),
      global.sessionStorage.setItem('guidance',JSON.stringify(mission))
    },
    setSession(state,ss){
      state.session=ss
    },
  }
})
export default store