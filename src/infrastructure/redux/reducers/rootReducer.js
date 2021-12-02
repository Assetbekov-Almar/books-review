import { combineReducers } from 'redux'
import libraryReducer from "./libraryReducer";
import bookshelfReducer from "./bookshelfReducer";
import getBooksReducer from "./getBooksReducer";

export default combineReducers({
  libraryReducer,
  bookshelfReducer,
  getBooksReducer
})