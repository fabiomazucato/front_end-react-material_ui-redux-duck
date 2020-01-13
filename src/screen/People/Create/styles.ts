import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme =>
	// console.log(theme),
	({
		root: {
			width: '100%'
		},
		backButton: {
			marginRight: theme.spacing(1)
		},
		instructions: {
			marginTop: theme.spacing(1),
			marginBottom: theme.spacing(1)
		},
		alignCenter: {
			width: '100%',
			marginTop: 100,
			display: 'flex',
			justifyContent: 'center'
		}
	})
)
