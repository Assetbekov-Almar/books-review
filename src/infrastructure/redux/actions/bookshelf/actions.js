import {SET_REVIEW, REMOVE_REVIEW} from "./actionTypes";

export const setReview = (payload) => {
	return {
		type: SET_REVIEW,
		payload
	}
}

export const removeReview = (payload) => {
	return {
		type: REMOVE_REVIEW,
		payload
	}
}