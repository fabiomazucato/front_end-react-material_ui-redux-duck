import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

/* Material UI */

import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'

import { IViewProps } from './types'

function MenuView(props: IViewProps): JSX.Element {
	const { handleMenu, handleClose, open, anchorEl, menuProps } = props

	return (
		<Fragment>
			<IconButton
				aria-label='account of current user'
				aria-controls='menu-appbar'
				aria-haspopup='true'
				onClick={handleMenu}
				color='inherit'
			>
				<AccountCircle />
			</IconButton>
			<Menu
				id='menu-appbar'
				anchorEl={anchorEl}
				anchorOrigin={menuProps}
				keepMounted
				transformOrigin={menuProps}
				open={open}
				onClose={handleClose}
			>
				<Link
					to='/'
					style={{ textDecoration: 'none', color: '#636363' }}
				>
					<MenuItem onClick={handleClose}>Lista de Pessoas</MenuItem>
				</Link>
				<Link
					to='/people/create'
					style={{ textDecoration: 'none', color: '#636363' }}
				>
					<MenuItem onClick={handleClose}>Cadastrar Pessoa</MenuItem>
				</Link>
			</Menu>
		</Fragment>
	)
}

export default MenuView
