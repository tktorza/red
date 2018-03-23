import { coordsObject, giveCoords, makeRotation, notInThisPiece, isOk, pieceMove } from '../components/Coords'

function tableUpdate(table, piecePrev, piece){
    // if (isok){
        let ok = 1;
        giveCoords(piece).then(c => {
            for (let i = 0; i < 4; i++) {
                if (c[i] && c[i].x >= 0 && c[i].x < 10 && c[i].y >= 0 && c[i].y < 20)
                    piece.coords.push(c[i]);
                else
                    ok = 0;
            }
            if (ok == 1) {
            // console.log("pushPieceToTable--->2", state.table[0], state.piece[0], c);
                pieceMove(table, piecePrev, c).then(tableNew => {
                    return tableNew;
                });
            }else{
                return null;
            }
        })
        
        table.cols[piece.x].lines[piece.y - 1].className = '';
        table.cols[piece.x].lines[piece.y].className = piece.className;
    // }
}

function createTable(){
    let table = {};
    let className = '';
    table.cols = [];
    for (let x = 0; x < 10; x++) {
        table.cols[x] = { lines: [], key: x };
        for (let y = 0; y < 20; y++) {
            table.cols[x].lines[y] = { className: className, key: y };
            className = "";
        }
    }
    return table
  }
  

const game = (state = {
    table: createTable(),
    piece: {
        type: 'L',
        x: 4,
        y: 1,
        rotation: 0,
        className: "color-blue"
    },
    timer: 1000
    // timer: 5000
}, action) => {
    // const game = (state = {game: 1000, test: 0}, action) => {
      switch (action.type) {
        case 'UPDATE':
        let table = tableUpdate(state.table, state.piece, action.piece);
            return {
                table: table ? table : state.table,
                piece: table ? action.piece : state.piece,
                timer: state.timer
        };
        case 'SPEED':
          return {
            timer: state.timer/2,
            table: state.table,
            piece: state.piece
          }
        case 'TIME_ACTION':
        let piece = {};
        piece.x = state.piece.x;
        piece.y = state.piece.y + 1;
        piece.className = state.piece.className;
        piece.type = state.piece.type;
        piece.rotation = state.piece.rotation;
        piece.coords = [];
          return {
              table: tableUpdate(state.table, state.piece, piece),
              piece: piece,
              timer: state.timer
            };
        default:
          return state
      }
    }
    export default game