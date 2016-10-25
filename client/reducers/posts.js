// for reducer send action and copy of current state
function posts(state= [] , action) {
    switch(action.type){
      case 'INCREMENT_LIKES':
        console.log("incrementing likes");
        const i = action.index;
        return [
          ...state.slice(0, i), //before post being updated
          {...state[i], likes: state[i].likes + 1},
          ...state.slice(i + 1), //after post being updated
        ]
      default:
        return state;

    }
}

export default posts;
