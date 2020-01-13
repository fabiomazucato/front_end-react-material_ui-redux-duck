import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme =>
	// console.log(theme),
	({
		root: {
			flexGrow: 1
		},
		menuButton: {
			marginRight: theme.spacing(2)
		},
		title: {
			flexGrow: 1
		}
	})
)
