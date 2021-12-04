import {SET_REVIEW, REMOVE_REVIEW} from "../actions/bookshelf";

const initState = {
	reviews: []
};

export default function bookshelfReducer(state = initState, action) {
	switch (action.type) {
		case SET_REVIEW:
			const { id, rating, review} = action.payload
			const currentReviews = state.reviews

			if (currentReviews.some(review => review.id === id)) {
				const reviewIndex = currentReviews.findIndex(review => review.id === id)
				if (currentReviews[reviewIndex].rating !== rating ||
						currentReviews[reviewIndex].review !== review) {
					return {
						reviews: Object.assign([...currentReviews],  {[reviewIndex]: { id, rating, review }})
					}
				} else {
					return {
						reviews: [...currentReviews]
					}
				}
			} else {
				return {
					reviews: [...currentReviews, {id, rating, review}]
				}
			}

		case REMOVE_REVIEW: {
			const index = state.reviews.findIndex(review => review.id === action.payloadid)
			return {
				reviews: [...state.reviews.splice(index, 1), ...state.reviews]
			}
		}

		default:
			return state;
	}
}