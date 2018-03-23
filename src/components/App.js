import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
import AddUser from '../containers/AddUser'
// import UserList from '../containers/UserList'
import Connected  from './Connected'
// import { pushUser } from './actions/index';
// import { newPiece } from '../actions'
// import { giveCoords } from './Coords'


function Center(props) {
  const isLoggedIn = props.state.users[0] ? 1 : null;
  if (!isLoggedIn) {
    return <AddUser />;
  }
  return <Connected user={props.state.users[0].text}/>;
}

const App = (state, dispatch) => {
  return (
  
  <div className="App">
    <div className="App-center">
    <Center state={state} />
    </div>
  </div>
)}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
    return {dispatch}
}
export default connect(mapStateToProps, mapDispatchToProps)(App);



const Display = ({ count }) => (
  <div>
    { count }
  </div>
)

const Inc = ({ onClick, state = 0 }) => {
  setTimeout(() => onClick( state + 1 ), 1500)
  return (null)
}

class Store extends Component {
  state = {}

  handleClick = count => {
    this.setState({ count })
  }

  render(){
    const { count } = this.state
    console.log('count:', count)

    return (
      <div>
        <Inc onClick={ this.handleClick } state={ count }/>
        <Display count={ count } />
      </div>
    )
  }
}