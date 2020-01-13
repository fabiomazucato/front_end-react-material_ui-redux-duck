import { IPerson } from '../../../models/Person'

export interface IProps {}
export interface IViewProps {
	[x: string]: any
	data: Array<any>
	handleModal: (personId: number) => void
	closeModal: () => void
	loading: boolean
	classes: any
	person?: IPerson | undefined

	isDelete: boolean
	handleDelete: (personId: number) => void
	closeDelete: () => void
	confirmDelete: () => void
}
