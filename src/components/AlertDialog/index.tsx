import React from 'react'

/* Material UI */
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

import { IProps } from './types'

function AlertDialog(props: IProps): JSX.Element {
	const { title, msg, open, handleClose, handleAgree } = props

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby='alert-dialog-title'
			aria-describedby='alert-dialog-description'
		>
			<DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
			<DialogContent>
				<DialogContentText id='alert-dialog-description'>
					{msg}
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color='default'>
					Cancelar
				</Button>
				<Button onClick={handleAgree} color='primary' autoFocus>
					Confirmar
				</Button>
			</DialogActions>
		</Dialog>
	)
}

export default AlertDialog
