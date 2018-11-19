import Vuex from 'vuex'

// Store functionality
import actions from './actions'
import getters from './getters'
import modules from './modules'
import mutations from './mutations'
import state from './state'

// Create a new store
const store = () => {
	return new Vuex.Store({
	  actions,
	  getters,
	  modules,
	  mutations,
	  state
	})
}

export default store
