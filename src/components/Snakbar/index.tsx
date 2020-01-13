import React from 'react'

import Button from '@material-ui/core/Button'
import { useSnackbar } from 'notistack'

function Snakbar(): JSX.Element {
	const { enqueueSnackbar } = useSnackbar()

	const handleClickVariant = (): void => {
		enqueueSnackbar('cadastro realizado com sucesso', {
			variant: 'success'
		})
	}

	return (
		<React.Fragment>
			<Button onClick={() => handleClickVariant()}>
				Show success snackbar
			</Button>
		</React.Fragment>
	)
}

export default Snakbar
