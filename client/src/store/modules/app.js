import axios from 'axios'

const state = {
  config: {
    googleMaps: {
      apiKey: 'AIzaSyBNAqPrTQoz9P4NBlDDyfxrnKiafkaL8iQ',
    },
    windowMatchSizeLg: '(min-width: 992px)',
    palette: {
      primary: '#4ae387',
      danger: '#e34a4a',
      info: '#4ab2e3',
      success: '#db76df',
      warning: '#f7cc36',
      white: '#fff',
      black: '#000',
      fontColor: '#34495e',
      transparent: 'transparent',
      lighterGray: '#ddd',
    },
  },
  isLoading: true,
  sidebar: {
    opened: false,
    withoutAnimation: false,
  },
  myTest: true,
  authState: false,
  authUser: {},
  currentRoom: null,
  rooms: [],
  socket: null
}

const mutations = {
  setLoading (state, isLoading) {
    state.isLoading = isLoading
  },
  TOGGLE_WITHOUT_ANIMATION: (state, value) => {
    state.sidebar.withoutAnimation = value
  },
  IS_TEST: (state, payload) => {
    state.myTest = payload
  },
  ASSIGN_USER_DATA: (state, payload) => {
    state.authUser = payload
  },
  ASSIGN_ROOM_DATA: (state, payload) => {
    state.rooms = payload
  },
  ADD_ROOM: (state, payload) => {
    state.rooms = [...state.rooms, payload]
  },
  SAVE_CURRENT_ROOM: (state, payload) => {
    state.currentRoom = payload
  },
  DELETE_ROOM: (state, payload) => {
    state.currentRoom = null
    state.rooms = state.rooms.filter((room) => room._id !== payload._id)
  },
  TOGGLE_AUTH_STATE: (state, payload) => {
    state.authState = payload
  },
  ASSIGN_SOCKET: (state, payload) => {
    state.socket = payload
  },
  LEAVE_ROOM: (state, payload) => {
    state.currentRoom.users = payload
  },
  REMOVE_ACCESS_ID: (state, payload) => {
    state.currentRoom = payload
  },
  RESET_STATE: (state) => {
    state.authState = false
    state.authUser = {}
    state.currentRoom = null
    state.rooms = []
  }
}

const actions = {
  isTest ({ commit }, value) {
    commit('IS_TEST', value)
  },
  isToggleWithoutAnimation ({ commit }, value) {
    commit('TOGGLE_WITHOUT_ANIMATION', value)
  },
  saveUserData: (context, payload) => {
    context.commit('ASSIGN_USER_DATA', payload)
  },
  updateRoomData: (context, payload) => {
    context.commit('ASSIGN_ROOM_DATA', payload)
  },
  addRoom: (context, payload) => {
    context.commit('ADD_ROOM', payload)
  },
  deleteRoom: (context, payload) => {
    context.commit('DELETE_ROOM', payload)
  },
  toggleAuthState: (context, payload) => {
    context.commit('TOGGLE_AUTH_STATE', payload)
  },
  assignSocket: (context, payload) => {
    context.commit('ASSIGN_SOCKET', payload)
  },
  saveCurrentRoom: (context, payload) => {
    context.commit('SAVE_CURRENT_ROOM', payload)
  },
  leaveRoom: (context, payload) => {
    context.commit('REMOVE_USER_ID', payload)
  },
  removeAccessId: (context, payload) => {
    context.commit('REMOVE_ACCESS_ID', payload)
  },
  deleteUserAccount: (context) => {
    context.commit('RESET_STATE')
    axios.delete('/api/user/current').then(() => {
      context.commit('RESET_STATE')
      localStorage.clear()
      this.$router.push({ name: 'login' })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
