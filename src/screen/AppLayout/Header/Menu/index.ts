import { createElement, useState } from 'react'
import { Redirect } from 'react-router-dom'

import View from './view'

function MenuContainer(): JSX.Element {
	// 	const classes = useStyles()
	const [anchorEl, setAnchorEl] = useState(null)
	const open = Boolean(anchorEl)

	const menuProps = {
		vertical: 'top',
		horizontal: 'right'
	}

	const handleChange = (event: any): void => {
		// setAuth(event.target.checked)
	}

	const handleMenu = (event: any): void => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = (page?: string): void => {
		setAnchorEl(null)
	}

	const viewProps = {
		handleChange,
		handleMenu,
		handleClose,
		open,
		anchorEl,
		menuProps
	}

	return createElement(View, viewProps)
}
export default MenuContainer
