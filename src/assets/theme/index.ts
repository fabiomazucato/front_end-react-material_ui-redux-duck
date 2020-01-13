import { red } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#556cd6'
		},
		secondary: {
			main: '#AD00B4'
		},
		success: {
			main: '#19857b'
		},
		error: {
			main: red.A400
		},
		background: {
			default: '#fff'
		}
	}
})

export default theme
