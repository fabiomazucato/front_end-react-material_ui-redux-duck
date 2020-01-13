import axios from 'axios'

const api = {
	url: 'http://www.mocky.io'
}

export const axiosInstance = axios.create({
	baseURL: `${api.url}/v2`,
	timeout: 60000,
	headers: {
		'Content-Type': 'application/json'
	}
})

/** 
 * API Reserva caso mocky pare de funcionar 
 * 
const api = {
	url: 'https://jsonplaceholder.typicode.com'
}

export const axiosInstance = axios.create({
	baseURL: `${api.url}`,
	timeout: 60000,
	headers: {
		'Content-Type': 'application/json'
	}
})
*/
