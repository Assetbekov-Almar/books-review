import { ADD_BOOK } from "./addBookTypes";

export const addBook = (book) => {
  return {
    type: ADD_BOOK,
    payload: book
  };
};