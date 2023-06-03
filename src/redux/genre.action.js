import { SET_GENRE } from "./genre.types"

export const setGenre = (payload) => {
    return {
        type: SET_GENRE,
        payload,
    }
}