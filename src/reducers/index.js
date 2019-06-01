import {combineReducers} from "redux";
import LibraryReducer from "./library-reducer.js";

export default combineReducers({
    libraries: LibraryReducer
});