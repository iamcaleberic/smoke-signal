// for reducer send action and copy of current state
function posts(state= [] , action) {
    console.log("I am changing");
    console.log(state, action);
    return state;
}

export default posts;
