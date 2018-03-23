import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import functional from 'react-functional'
import addUser, {test2, timerUp, timeAction, update } from '../actions/index';
import Table from '../containers/Table'
import { coordsObject, giveCoords, makeRotation, notInThisPiece, isOk, pieceMove } from '../components/Coords'
// const Inc = ({ onClick, state = 0 }) => {
//     setTimeout(() => onClick( state + 1 ), 1500)
//     return (null)
//   }

export function pushPieceToTable(piece, state){
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
            pieceMove(state.table[0], state.piece[0], c).then(table => {
                if (table != null) {
                    state.dispatch(update(piece, table));
                }
            });
        }
    })
}
let i = 0;
const KeyDown = (state, dispatch, evt) => {
    let typeTable = ['carre', 'L', 'ReverseL', 'Line', 'ReverseZ', 'Z', 'T'];
    let piece = {};
    piece.x = state.piece[0].x;
    piece.y = state.piece[0].y;
    piece.className = state.piece[0].className;
    piece.type = state.piece[0].type;
    piece.rotation = state.piece[0].rotation;
    piece.coords = [];
    switch (evt.keyCode){
        case 80:
            piece.type = typeTable[i++ % 7];
            break;
        case 40:
            piece.y = state.piece[0].y + 1;
            break;
        case 38:
            piece.rotation = (state.piece[0].rotation + 90) % 360;
            break;
        case 37:
            piece.x = state.piece[0].x - 1;
            break;
        case 39:
            piece.x = state.piece[0].x + 1;
            break;
        default:
            return; 
    }
    state.dispatch(update(state.game.piece, piece));
}

const Connected = (props, state, dispatch) => {
    console.log("Connected Appears");
    document.onkeydown = (evt) => {
        evt = evt || window.event;
        KeyDown(state, dispatch, evt);
    }
    setTimeout(()=>{
        console.log('coucou');
        props.dispatch(timeAction())}, props.game.timer);
    return (
        <div className='Connected'>
            <div onClick={()=>{
                props.dispatch(timerUp());
            }}>TIMERUP</div>
            <Table />
            {/* <Inc onClick={ this.handleClick } state={ count }/> */}
            <div className="Connected-rotate">
                <div className="space">{props.user}</div>
                <div>Connected</div>
            </div>
        </div>
    )
}
Connected.componentWillMount = (state) => {
    console.log("CONNECTED WILL MOUNT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
}

Connected.componentDidMount = (state) => {
    // setTimeout()
        // setInterval(() => { or timeOut better
}


const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(functional(Connected))