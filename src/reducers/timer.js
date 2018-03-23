const timer = (state = 1000, action) => {
    switch (action.type) {
      case 'SPEED':
        return state/2;
      default:
        return state
    }
  }
  
  export default timer