import React, { Fragment } from 'react'

/* Material UI */
import MaterialTable from 'material-table'
import {
	Edit as EditIcon,
	Delete as DeleteIcon,
	Pageview as PageviewIcon
} from '@material-ui/icons'

/* Components */
import Loading from '../../../components/Loading'
import AlertDialog from '../../../components/AlertDialog'
import Modal from './Modal'

import { IViewProps } from './types'

function PeopleList(props: IViewProps): JSX.Element {
	const {
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
	} = props

	const handleEdit = (data: any): JSX.Element => {
		return (
			<Fragment>
				<PageviewIcon
					className={classes.icon}
					titleAccess='Visualizar todos os dados'
					onClick={() => handleModal(data.id)}
				/>
				<EditIcon
					className={classes.iconEdit}
					titleAccess='Editar dados da pessoa'
					onClick={() => closeDelete()}
				/>
				<DeleteIcon
					className={classes.iconDelete}
					titleAccess='Excluir dados da pessoa'
					onClick={() => handleDelete(data.id)}
				/>
			</Fragment>
		)
	}

	const columns = [
		{ title: 'Nome', field: 'name' },
		{ title: 'Username', field: 'username' },
		{ title: 'Email', field: 'email' },
		{ title: 'Cidade', field: 'address.city' },
		{ title: 'Telefone', field: 'phone' },
		{
			title: 'Opções',
			render: (data: any) => {
				return handleEdit(data)
			}
		}
	]

	return (
		<Fragment>
			{loading ? (
				<div className={classes.divLoading}>
					<Loading />
				</div>
			) : (
				<Fragment>
					<h1>Lista de Pessoas</h1>
					<MaterialTable
						title=''
						columns={columns}
						data={data}
						options={{
							search: true,
							padding: 'default',
							paging: false,
							showTitle: false
						}}
					/>

					<Modal
						isOpen={isOpen}
						closeModal={closeModal}
						data={person}
					/>

					<AlertDialog
						open={isDelete}
						title={'Confirmar exclusão'}
						msg={`Você deseja excluir o cadastro de ${person?.name}?`}
						handleClose={closeDelete}
						handleAgree={confirmDelete}
					/>
				</Fragment>
			)}
		</Fragment>
	)
}

export default PeopleList
