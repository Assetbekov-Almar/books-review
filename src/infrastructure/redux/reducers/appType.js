import { SET_DESKTOP_TYPE, SET_MOBILE_TYPE } from '../actions/appType/actionTypes'

const initialState = {
	isMobile: false,
	isDesktop: false,
}

const appType = (state = initialState, action) => {
	switch (action.type) {
		case SET_MOBILE_TYPE:
			return {
				isMobile: true,
				isDesktop: false,
			}
		case SET_DESKTOP_TYPE:
			return {
				isMobile: false,
				isDesktop: true,
			}
		default:
			return state
	}
}

export default appType
