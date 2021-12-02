import {GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS, GET_BOOKS_FAILURE} from "../actions/library"

const initState = {
	books: [],
	loading: false,
	error: null,
};

export default function getBooksReducer(state = initState, action) {
	switch (action.type) {
		case GET_BOOKS_REQUEST:
			return {
				books: [],
				loading: true,
				error: null,
			}

		case GET_BOOKS_SUCCESS:
			return {
				books: action.payload,
				loading: false,
				error: null,
			}

		case GET_BOOKS_FAILURE:
			return {
				books: [],
				loading: false,
				error: action.payload,
			}

		default:
			return state;
	}
}