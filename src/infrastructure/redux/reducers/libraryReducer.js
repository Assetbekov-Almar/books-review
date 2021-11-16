import {ADD_BOOK} from "../actions/library/addBook"

const initState = {
  books: []
};

export default function libraryReducer(state = initState, action) {
  switch (action.type) {
    case ADD_BOOK:
      console.log(action.payload)
      return {
        books: [...state.books, action.payload]
      }

    default:
      return state;
  }
}