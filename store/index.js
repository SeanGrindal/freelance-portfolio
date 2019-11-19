import Vuex from 'vuex'
import workData from '~/assets/work.json'

if (process.client) {
  var sniffer = require('sniffer')
}

const createStore = () => {
  return new Vuex.Store({
    state: {
      workPages: workData.pages,
      isMobile: null
    },
    getters: {
      currentWorkPageNum: (state) => {
        const page = state.workPages.find(p => p.id === state.route.params.workId)
        return state.workPages.indexOf(page)
      },
      isMobile: (state) => {
        return state.isMobile
      }
    },
    mutations: {
      CHECK_MOBILE(state) {
        state.isMobile = !sniffer.isDesktop
      }
    },
    actions: {
      checkMobile ({commit}) {
        commit('CHECK_MOBILE')
      }
    }
  })
}

export default createStore
