import { API_URL, API_KEY, LANGUAGE } from '../constants';

const fetch = window.fetch;

const handleResponse = response => {
	const data = response.json();
	if (response.ok) {
		return data.then(json => Promise.resolve(json));
	} else {
		return data.then(json => {
			if (typeof json === 'object' && json.errors && Array.isArray(json.errors) && json.errors.length) {
				return Promise.reject(json.errors[0]);
			}
			return Promise.reject(json);
		});
	}
};

const getHeaders = () => {
	const headers = {
		'Content-Type': 'application/json;charset=utf-8'
	};

	return headers;
};

const getUrl = (endpoint, searchParams = {}) => {
	const params = {
		api_key: API_KEY,
		language: LANGUAGE,
		...searchParams,
	};
	const url = new URL(`${API_URL}${endpoint}`);
	url.search = new URLSearchParams(params).toString();

	return url;
}

const Http = {
	get: (endpoint, searchParams = {}) => {
		const config = {
			method: 'GET',
			headers: getHeaders(),
		};

		const url = getUrl(endpoint, searchParams);

		return fetch(url, config)
			.then(handleResponse);
	},

	post: (endpoint, data, searchParams = {}) => {
		const config = {
			method: 'POST',
			body: JSON.stringify(data),
			headers: getHeaders(),
		};

		const url = getUrl(endpoint, searchParams);

		return fetch(url, config)
			.then(handleResponse);
	},

	delete: (endpoint, data) => {
		const config = {
			method: 'DELETE',
			body: JSON.stringify(data),
			headers: getHeaders(),
		};

		const url = getUrl(endpoint);

		return fetch(url, config)
			.then(handleResponse);
	},
};

export default Http;