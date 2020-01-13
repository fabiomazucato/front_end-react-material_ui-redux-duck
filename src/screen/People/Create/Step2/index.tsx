import React from 'react'

/* Material UI */
import TextField from '@material-ui/core/TextField'

import { IPropsSteps } from '../types'
import { useStyles } from './styles'

function Step2(props: IPropsSteps): JSX.Element {
	const { changeInput, data } = props

	const classes = useStyles()

	return (
		<div className={classes.root}>
			<div className={classes.spaceBetween}>
				<TextField
					error={false}
					label='Cidade'
					id='city'
					placeholder='Digite a cidade'
					className={classes.textField}
					margin='normal'
					value={data?.address.city}
					onChange={e => changeInput('address.city', e)}
				/>
				<TextField
					label='CEP'
					id='zipcode'
					placeholder='Digite o CEP'
					className={classes.textField}
					margin='normal'
					value={data?.address.zipcode}
					onChange={e => changeInput('address.zipcode', e)}
				/>
			</div>

			<TextField
				id='street'
				label='Endereço'
				className={classes.textFieldFull}
				placeholder='Digite o endereço com rua e/ou avenida'
				margin='normal'
				value={data?.address.street}
				onChange={e => changeInput('address.street', e)}
			/>
			<TextField
				id='suite'
				label='Complemento'
				className={classes.textFieldFull}
				placeholder='Complete o endereço com número da casa, bloco e/ou apartamento'
				margin='normal'
				value={data?.address.suite}
				onChange={e => changeInput('address.suite', e)}
			/>
		</div>
	)
}

export default Step2
