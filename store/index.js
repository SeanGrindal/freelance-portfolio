import Vuex from 'vuex'
import workData from '~/assets/work.json'

if (process.client) {
	var sniffer = require('sniffer')
}

const createStore = () => {
	return new Vuex.Store({
		state: {
			workPages: workData.pages.filter(pg => true),
			experiments: workData.pages.filter(pg => true),
			isMobile: null,
			slideRevealed: true
		},
		getters: {
			currentWorkPageNum: state => {
				const page = state.workPages.find(p => p.id === state.route.params.workId)
				return state.workPages.indexOf(page)
			},
			nextWorkPageNum: (state, getters) => {
				let pageNum = getters.currentWorkPageNum + 1
				if (pageNum >= state.workPages.length) pageNum = 0

				return pageNum
			},
			isMobile: state => {
				return state.isMobile
			},
			slideRevealed: state => {
				return state.slideRevealed
			}
		},
		mutations: {
			CHECK_MOBILE(state) {
				state.isMobile = !sniffer.isDesktop
			},
			SET_SLIDE_REVEALED(state, bool) {
				state.slideRevealed = bool
			}
		},
		actions: {
			checkMobile({ commit }) {
				commit('CHECK_MOBILE')
			},
			setSlideRevealed({ commit }, bool) {
				commit('SET_SLIDE_REVEALED', bool)
			}
		}
	})
}

export default createStore
