import { APP_INIT_ERROR, APP_INIT_FINISH, APP_INIT_START } from './actionTypes'

export const appInitStart = () => {
	return {
		type: APP_INIT_START,
	}
}

export const appInitFinish = () => {
	return {
		type: APP_INIT_FINISH,
	}
}

export const appInitError = () => {
	return {
		type: APP_INIT_ERROR,
	}
}
