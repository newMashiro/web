//test
export const getStorage = state => {
    if (!state.user) {
        state.user = JSON.parse(localStorage.getItem('user'))
    }
    return state.user
}
