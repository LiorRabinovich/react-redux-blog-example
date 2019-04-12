export function handlerLogin(user) {
    return (dispatch) => {
        dispatch({
            type: 'SET_ACTIVE_USER',
            payload: user
        });
    }
}

export function handlerLogout() {
    return {
        type: 'SET_ACTIVE_USER',
        payload: null
    }
}