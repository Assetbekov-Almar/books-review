import { APP_INIT_ERROR, APP_INIT_FINISH, APP_INIT_START } from '../actions/appInit/actionTypes'

const initialState = {
	isInit: false,
	error: null,
}

const appInit = (state = initialState, action) => {
	switch (action.type) {
		case APP_INIT_START:
			return {
				isInit: false,
				error: null,
			}
		case APP_INIT_FINISH:
			return {
				isInit: true,
				error: null,
			}
		case APP_INIT_ERROR:
			return {
				isInit: true,
				error: true,
			}
		default:
			return state
	}
}

export default appInit
