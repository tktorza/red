import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Column } from './Column'
import { fromJS } from 'immutable'
// import {createReactClass} from 'create-react-class' 
import functional from 'react-functional'

const Table = (state, dispatch) => {
    console.log('update Table component')
    console.log(state.game)
    return (
        <div className="boardFull">
        {/* <IntervalDown evt={()=> {}}state={state}/> */}
            {state.game.table ? state.game.table.cols.map((col, key) => {
                return (<Column key={key} col={col} />)
            }) : 0}
        </div>
    )
}

Table.componentWillMount = (state) => {
}

Table.componentDidMount = (props) => {
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(functional(Table))