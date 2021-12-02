import {SET_REVIEW} from "./actionTypes";

export const setReview = (payload) => {
	return {
		type: SET_REVIEW,
		payload
	}
}