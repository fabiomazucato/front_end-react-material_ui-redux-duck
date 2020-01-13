import React, { useRef } from 'react'

/* Mateiral UI */
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'

/* Components */
import Loading from '../../../../components/Loading'

import { useStyles } from './styles'
import { IViewProps } from './types'

function ModalView(props: IViewProps): JSX.Element {
	const classes = useStyles()
	const rootRef = useRef<HTMLDivElement>(null)

	const { isOpen, closeModal, data } = props

	return (
		<div className={classes.root} ref={rootRef}>
			<Modal
				aria-labelledby='spring-modal-title'
				aria-describedby='spring-modal-description'
				className={classes.modal}
				open={isOpen}
				onClose={closeModal}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500
				}}
			>
				<div className={classes.paper}>
					<div className={classes.headerModal}>
						<h2 id='server-modal-title'>{'Visualizar Dados'}</h2>
						<CloseIcon
							onClick={closeModal}
							className={classes.closeButton}
						/>
					</div>

					<div id='server-modal-description'>
						{data === undefined ? (
							<Loading pixel={80} />
						) : (
							<List className={classes.root}>
								<li>
									<Typography
										className={classes.dividerFullWidth}
										color='textSecondary'
										display='block'
										variant='caption'
									>
										Dados Pessoais
									</Typography>
								</li>

								<ListItem>
									<ListItemText
										primary='Nome'
										secondary={data.name}
									/>
								</ListItem>
								<Divider component='li' />

								<ListItem>
									<ListItemText
										primary='Username'
										secondary={data.username}
									/>
								</ListItem>
								<Divider component='li' />

								<ListItem>
									<ListItemText
										primary='Email'
										secondary={data.email}
									/>
								</ListItem>
								<Divider component='li' />

								<ListItem>
									<ListItemText
										primary='Telefone'
										secondary={data.phone}
									/>
								</ListItem>

								<li style={{ marginTop: 20, marginBottom: 10 }}>
									<Typography
										className={classes.dividerFullWidth}
										color='textSecondary'
										display='block'
										variant='caption'
									>
										Endereço
									</Typography>
								</li>

								<ListItem>
									<ListItemText
										primary='Endereço'
										secondary={data.address.street}
									/>
								</ListItem>
								<Divider component='li' />

								<ListItem>
									<ListItemText
										primary='Complemento'
										secondary={data.address.suite}
									/>
								</ListItem>
								<Divider component='li' />

								<ListItem>
									<ListItemText
										primary='CEP'
										secondary={data.address.zipcode}
									/>
								</ListItem>
								<Divider component='li' />

								<ListItem>
									<ListItemText
										primary='Cidade'
										secondary={data.address.city}
									/>
								</ListItem>
							</List>
						)}
					</div>
				</div>
			</Modal>
		</div>
	)
}
export default ModalView
