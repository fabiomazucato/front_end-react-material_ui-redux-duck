import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100vh'
	},
	main: {
		marginTop: theme.spacing(8),
		marginBottom: theme.spacing(2)
	},
	footer: {
		width: '100%',
		padding: theme.spacing(3, 2),
		marginTop: 'auto',
		position: 'fixed',
		bottom: 0,
		backgroundColor:
			theme.palette.type === 'dark'
				? theme.palette.grey[800]
				: theme.palette.grey[200]
	}
}))
