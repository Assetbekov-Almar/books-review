import { BOOKS_SEARCH_URL } from './config'
import { handleResponse } from '../../../utils/handleResponse'

class BooksSearchService {
	search(query) {
		return fetch(`${BOOKS_SEARCH_URL}?q=${query}`, {
			method: 'GET',
			headers: {'Content-Type': 'application/json;charset=utf-8'}
		}).then((response) => handleResponse(response))
	}
}

export default new BooksSearchService()

