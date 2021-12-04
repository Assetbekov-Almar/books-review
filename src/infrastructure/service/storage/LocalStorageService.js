class LocalStorageService {
	setItem(key, value) {
		if (typeof value !== 'string') {
			throw new Error(`Value of localStorage by key ${key} is not string.`)
		}

		if (typeof key !== 'string') {
			throw new Error(`Key ${key} is not string`)
		}
		localStorage.setItem(key, value)
	}

	getItem(key) {
		if (typeof key !== 'string') {
			throw new Error(`Key ${key} is not string`)
		}

		return localStorage.getItem(key)
	}

	unsetItem(key) {
		if (typeof key !== 'string') {
			throw new Error(`Key ${key} is not string`)
		}

		localStorage.removeItem(key)
	}

	clear() {
		localStorage.clear()
	}
}

export default new LocalStorageService()
