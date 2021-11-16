import {ADD_BOOK, REMOVE_BOOK} from "../actions/library"

const initState = {
  books: []
};

export default function libraryReducer(state = initState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return {
        books: [...state.books, action.payload]
      }

    case REMOVE_BOOK:
      return {
        books: state.books.filter(book => book.id !== action.payload.id)
      }

    default:
      return state;
  }
}