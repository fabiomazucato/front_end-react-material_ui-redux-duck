import React from 'react'

/* Material UI */
import TextField from '@material-ui/core/TextField'

import { IPropsSteps } from '../types'
import { useStyles } from './styles'

function Step1(props: IPropsSteps): JSX.Element {
	const { changeInput, data } = props

	const classes = useStyles()

	return (
		<div className={classes.root}>
			<TextField
				id='name'
				label='Nome'
				className={classes.textFieldFull}
				placeholder='Digite o nome'
				margin='normal'
				value={data?.name}
				onChange={e => changeInput('name', e)}
			/>
			<TextField
				id='email'
				label='Email'
				className={classes.textFieldFull}
				placeholder='Digite o email'
				margin='normal'
				value={data?.email}
				onChange={e => changeInput('email', e)}
			/>

			<div className={classes.spaceBetween}>
				<TextField
					label='Username'
					id='username'
					placeholder='Digite o username'
					className={classes.textField}
					margin='normal'
					value={data?.username}
					onChange={e => changeInput('username', e)}
				/>
				<TextField
					label='Telefone'
					id='phone'
					placeholder='Digite o Telefone'
					className={classes.textField}
					margin='normal'
					value={data?.phone}
					onChange={e => changeInput('phone', e)}
				/>
			</div>
		</div>
	)
}

export default Step1
