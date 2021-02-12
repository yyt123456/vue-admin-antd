const state = {
  isCollapsed: JSON.parse(localStorage.getItem('isCollapsed')) || false,
  selectedKeys: localStorage.getItem('selectPath') ? JSON.parse(localStorage.getItem('selectPath')) : [],
  openKeys: localStorage.getItem('selectSubPath') ? JSON.parse(localStorage.getItem('selectSubPath')) : [],
}
const mutations = {
  SETCOLLAPSED(state) {
    state.isCollapsed = !state.isCollapsed
    localStorage.setItem('isCollapsed', state.isCollapsed)
  },
  SET_SELECT_KEY(state, key) {
    state.selectedKeys = [key]
    localStorage.setItem('selectPath', JSON.stringify([key]))
  },
  SET_OPEN_KEY(state, key) {
    state.openKeys = key
    localStorage.setItem('selectSubPath', JSON.stringify(key))
  }
}
const actions = {}
const getters = {
  isCollapsed: (state) => state.isCollapsed,
  selectedKeys: (state) => state.selectedKeys,
  openKeys: (state) => state.openKeys
}

export default {
  state,
  mutations,
  actions,
  getters,
}