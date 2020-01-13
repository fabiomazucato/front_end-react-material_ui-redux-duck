import { AxiosResponse } from 'axios'
import { axiosInstance } from './AxiosInstance'
import { IPerson } from '../models/Person'

export const getPeople: () => Promise<Array<IPerson>> = async () => {
	try {
		// const response: AxiosResponse = await axiosInstance.get('/users')
		const response: AxiosResponse = await axiosInstance.get(
			'/5e1b81743100007a004f337d'
		)

		return response.data
	} catch (error) {
		console.log(error)
	}
}
