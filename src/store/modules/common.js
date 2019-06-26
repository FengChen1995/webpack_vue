// import api from 'API/index'
import {
  SCREEN_CHANGE
} from '../mutation-types'

const state = {
  screen: {
    width: 0,
    height: 0
  }
}

const getters = {
  screen (state) {
    return state.screen
  }
}

const mutations = {
  [SCREEN_CHANGE] (state, data) {
    state.screen = data
  }
}

const actions = {

}
export default {
  state,
  mutations,
  actions,
  getters
}
