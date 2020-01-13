import React, { Fragment, createElement, useState, useEffect } from 'react'
import { useSnackbar } from 'notistack'

/* Redux */
import { useSelector, useDispatch } from 'react-redux'
import { Creators as peopletActions } from '../../../store/ducks/peopleData'
import { IPerson } from '../../../models/Person'
import { IApplicationState } from '../../../store/types'

/* Service */
import { getPeople } from '../../../services/PeopleService'

import { IProps } from './types'
import { useStyles } from './styles'
import View from './view'

function PeopleListContainer(props: IProps): JSX.Element {
	const { enqueueSnackbar } = useSnackbar()
	const classes = useStyles()
	const dispatch = useDispatch()
	const data = useSelector<IApplicationState, Array<IPerson>>(
		state => state.people
	)

	const [loading, setLoading] = useState(true)
	const [isOpen, setIsOpen] = useState(false)
	const [person, setPerson] = useState<IPerson | undefined>(undefined)
	const [isDelete, setIsDelete] = useState(false)

	/**
	 * Fetch API Peoples
	 */
	const fetchPeople = async (): Promise<void> => {
		try {
			const response: Array<IPerson> = await getPeople()

			dispatch(peopletActions.setPeople(response))

			setTimeout(() => {
				setLoading(false)
			}, 3000)
		} catch (err) {
			enqueueSnackbar(`Aconteceu um erro: ${err}`, {
				variant: 'error'
			})
		}
	}

	useEffect(() => {
		if (data.length === 0) {
			fetchPeople()
			return
		}

		setTimeout(() => {
			setLoading(false)
		}, 3000)
	}, [data])

	const getPerson = (personId: number): void => {
		const person = data.find(p => p.id === personId)

		setPerson(person)
	}

	/**
	 * Métodos do Modal de detalhes
	 */
	const handleModal = (personId: number): void => {
		getPerson(personId)
		setIsOpen(true)
	}

	const closeModal = (): void => {
		setPerson(undefined)
		setIsOpen(false)
	}

	/**
	 * Métodos de exclusão
	 */
	const handleDelete = (personId: number): void => {
		getPerson(personId)
		setIsDelete(true)
	}
	const closeDelete = (): void => {
		setPerson(undefined)
		setIsDelete(false)
	}

	const confirmDelete = async (): Promise<void> => {
		try {
			setIsDelete(false)
			setLoading(true)

			await dispatch(peopletActions.removePerson(person?.id))

			setPerson(undefined)
			setLoading(false)
			enqueueSnackbar('Registro removido com sucesso!', {
				variant: 'success'
			})
		} catch (err) {
			enqueueSnackbar(`Aconteceu um erro: ${err}`, {
				variant: 'error'
			})
		}
	}

	const viewProps = {
		data,
		isOpen,
		handleModal,
		closeModal,
		loading,
		classes,
		person,
		isDelete,
		handleDelete,
		closeDelete,
		confirmDelete
	}

	return createElement(View, viewProps)
}

export default PeopleListContainer
