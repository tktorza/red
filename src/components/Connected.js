import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import functional from 'react-functional'
// const Inc = ({ onClick, state = 0 }) => {
//     setTimeout(() => onClick( state + 1 ), 1500)
//     return (null)
//   }

const Connected = (props, state, dispatch) => {
    console.log("Connected Appears");
    return (
        <div className='Connected'>
            {/* <Table /> */}
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
    // if (!state.table[0])
    //     initTable(state);
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