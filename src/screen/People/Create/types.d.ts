import { IPerson } from '../../../models/Person'

export interface IProps {}
export interface IViewProps {
	[x: string]: any
	classes: any
	activeStep: number
	steps: any
	handleNext: () => void
	handleBack: () => void
	handleReset: () => void
	getStepContent: (value) => string

	onChangeInput: (ffield: string, e: ChangeEvent<HTMLInputElement>) => void
	form: IPerson
}

export interface IPropsSteps {
	changeInput: (field: string, e: ChangeEvent<HTMLInputElement>) => void
	data: IPerson
}
