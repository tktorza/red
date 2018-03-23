import { combineReducers } from 'redux'
import users from './users'
import count from './count'
import game from './game'
// import touch from './touch'
// import piece from './piece'
// import visibilityFilter from './visibilityFilter'

const userApp = combineReducers({
  users,
  count,
  game,
  // touch,
  // piece
})

export default userApp