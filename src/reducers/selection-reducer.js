export default (state = null, action) => {
    console.log(action);
    if (action === "select_library") return action.payload;
    return state;
};