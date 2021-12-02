import { GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS, GET_BOOKS_FAILURE, ADD_BOOK, REMOVE_BOOK } from "./actionTypes"

export const getBooksRequest = (payload) => {
  return {
    type: GET_BOOKS_REQUEST,
    payload
  }
}

export const getBooksSuccess = (payload) => {
  return {
    type: GET_BOOKS_SUCCESS,
    payload
  }
}

export const getBooksFailure = (payload) => {
  return {
    type: GET_BOOKS_FAILURE,
    payload
  }
}


export const addBook = (book) => {
  return {
    type: ADD_BOOK,
    payload: book
  }
}

export const removeBook = (book) => {
  return {
    type: REMOVE_BOOK,
    payload: book
  }
}