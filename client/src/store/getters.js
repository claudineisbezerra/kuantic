const toggleWithoutAnimation = state => { return state.app.sidebar.withoutAnimation }
const config = state => state.app.config
const palette = state => state.app.config.palette
const isLoading = state => state.app.isLoading
const getUserData = state => state.app.authUser
const getRoomData = state => state.app.rooms
const isAuthorized = state => {
  return state.app.authState
}
const getSocket = state => {
  return state.app.socket
}
const getCurrentRoom = state => state.app.currentRoom
const isTest = state => {
  return state.app.myTest
}

export {
  toggleWithoutAnimation,
  config,
  palette,
  isLoading,
  getUserData,
  getRoomData,
  isAuthorized,
  getSocket,
  getCurrentRoom,
  isTest,
}
