import { combineReducers } from "redux";
import genreReducer from "./genre.reducer";

const rootReducer = combineReducers({
    genre: genreReducer,
});

export default rootReducer
