import { IAddress } from './Address'

export interface IPerson {
	id?: number
	name: string
	username: string
	email: string
	phone: string
	address: IAddress
}
