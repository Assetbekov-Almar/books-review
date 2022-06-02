import { SET_DESKTOP_TYPE, SET_MOBILE_TYPE } from './actionTypes'

export const setMobileType = () => {
	return {
		type: SET_MOBILE_TYPE,
	}
}

export const setDesktopType = () => {
	return {
		type: SET_DESKTOP_TYPE,
	}
}
