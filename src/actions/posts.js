export function savePost(post) {
    return {
        type: 'SAVE_POST',
        payload: post
    }
}

export function setActivePost(postID) {
    return {
        type: 'SET_ACTIVE_POST',
        payload: postID
    }
}
