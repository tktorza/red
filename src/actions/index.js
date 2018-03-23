// import { coordsObject, giveCoords, makeRotation, notInThisPiece, isOk, pieceMove } from '../components/Coords'
const addUser = (text, id) => {
  return dispatch => {
    dispatch({
      type: 'ADD_USER',
      id: id,
      text
    });
}
}

export const incId = (id) => ({
  type: 'INC_ID',
  id: id + 1,
})


export const timeAction = () => ({
  type: 'TIME_ACTION',
})

//update table if it's possible
export const update = (prevPiece, piece) => ({
  type: 'UPDATE',
  piece
})

export const test2 = () => {
  console.log('Hello')
  return dispatch => {
    dispatch({
      type: 'TEST'
    });
}
}

export const timerUp = () => ({
  type: 'SPEED',
})

export default addUser