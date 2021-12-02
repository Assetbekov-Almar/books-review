import {SET_REVIEW} from "../actions/bookshelf";

const initState = {
	reviews: []
};

export default function bookshelfReducer(state = initState, action) {
	switch (action.type) {
		case SET_REVIEW:
			return {
				reviews: [...state.books, {id: action.payload.id, rating: action.payload.rating, review: action.payload.review} ]
			}

		default:
			return state;
	}
}