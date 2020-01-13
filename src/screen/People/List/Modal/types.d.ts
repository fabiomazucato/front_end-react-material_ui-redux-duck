import { IPerson } from '../../../../models/Person'

export interface IProps {
	isOpen: boolean
}
export interface IViewProps {
	[x: string]: any
	closeModal: () => void
	data?: IPerson | undefined
}
