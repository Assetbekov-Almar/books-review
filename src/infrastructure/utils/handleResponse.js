export const handleResponse = (response) => {
	const contentType = response.headers.get('content-type')
	if (contentType && contentType.indexOf('application/json') !== -1) {
		return response.json().then((data) => {
			return {
				status: response.status,
				payload: data,
			}
		})
	} else {
		return {
			status: response.status,
			payload: {
				error: 'Unexpected error',
			},
		}
	}
}
