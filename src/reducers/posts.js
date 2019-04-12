const initState = {
    active: null,
    data: []
}

const posts = (state = initState, action) => {
    switch (action.type) {
        case "SAVE_POST":
            state = {
                ...state,
                data: [...state.data, action.payload]
            }
            break;
        case "SET_ACTIVE_POST":
            state = {
                ...state,
                active: state.data[action.payload]
            }
            break;
        default:
            break;
    }
    return state;
}

export default posts;