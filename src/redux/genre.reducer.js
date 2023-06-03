
const INITIAL_STATE = {
    genre: null
}

const genreReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "SET_GENRE":
            return {
                ...state,
                genre: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default genreReducer