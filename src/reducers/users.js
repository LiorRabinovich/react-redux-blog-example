const initState = {
    user: null,
    isLogged: false
}

const users = (state = initState, action) => {
    switch (action.type) {
        case "SET_ACTIVE_USER":
            const isLogged = action.payload !== null ? true : false;

            state = {
                ...state,
                user: action.payload,
                isLogged: isLogged
            }
            break;
        default:
            break;
    }
    return state;
}

export default users;