import { createElement, useState, ChangeEvent } from 'react'
import { useSnackbar } from 'notistack'

/* Redux */
import { useSelector, useDispatch } from 'react-redux'
import { Creators as peopletActions } from '../../../store/ducks/peopleData'
import { IPerson } from '../../../models/Person'
import { IApplicationState } from '../../../store/types'

import { IProps } from './types'
import { useStyles } from './styles'
import View from './view'

function getSteps() {
	return ['Dados pessoais', 'Localização / Endereço']
}

function getStepContent(stepIndex: number) {
	switch (stepIndex) {
		case 0:
			return 'Primeiro passo, preencha os dados pessoais.'
		case 1:
			return 'Segundo e último passo, preencha o endereço.'
		default:
			return 'Step não existe'
	}
}

const objPerson: IPerson = {
	id: Math.random(),
	name: '',
	email: '',
	username: '',
	phone: '',
	address: {
		city: '',
		zipcode: '',
		street: '',
		suite: ''
	}
}

function PersonCreateContainer(props: IProps): JSX.Element {
	const { enqueueSnackbar } = useSnackbar()
	const classes = useStyles()
	const dispatch = useDispatch()

	const [activeStep, setActiveStep] = useState(0)
	const [form, setForm] = useState<IPerson>(objPerson)
	const steps = getSteps()

	const handleNext = () => {
		if (activeStep == 1) {
			saveStorePerson()
		}

		setActiveStep(prevActiveStep => prevActiveStep + 1)
	}

	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1)
	}

	const handleReset = () => {
		setActiveStep(0)
		setForm(objPerson)
	}

	const saveStorePerson = async (): Promise<void> => {
		try {
			await dispatch(peopletActions.addPerson(form))

			enqueueSnackbar('Registro cadastrado com sucesso!', {
				variant: 'success'
			})
		} catch (err) {
			enqueueSnackbar(`Aconteceu um erro: ${err}`, {
				variant: 'error'
			})
		}
	}

	const onChangeInput = (
		field: string,
		e: ChangeEvent<HTMLInputElement>
	): void => {
		const person: IPerson = field.includes('.')
			? {
					...form,
					address: {
						...form.address,
						[field.split('.')[1]]: e.target.value
					}
			  }
			: { ...form, [field]: e.target.value }

		setForm({ ...person })
	}

	const viewProps = {
		classes,
		activeStep,
		steps,
		handleNext,
		handleBack,
		handleReset,
		getStepContent,
		onChangeInput,
		form
	}

	return createElement(View, viewProps)
}

export default PersonCreateContainer
