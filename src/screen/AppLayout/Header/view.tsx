import React from 'react'

/* Material UI */
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

/* Components */
import Menu from './Menu'

import { IViewProps } from './types'

function Header(props: IViewProps): JSX.Element {
	const { classes } = props

	return (
		<AppBar position='static'>
			<Toolbar>
				<IconButton
					edge='start'
					className={classes.menuButton}
					color='inherit'
					aria-label='menu'
				>
					<MenuIcon />
				</IconButton>
				<Typography variant='h6' className={classes.title}>
					{'React, Material UI, Redux e Duck Pattern'}
				</Typography>
				<Menu />
			</Toolbar>
		</AppBar>
	)
}

export default Header
