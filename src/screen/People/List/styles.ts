import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme =>
	// console.log(theme),
	({
		icon: {
			marginRight: 5,
			cursor: 'pointer',
			'&:hover': {
				color: theme.palette.success.main
			}
		},
		iconEdit: {
			marginRight: 5,
			cursor: 'pointer',
			'&:hover': {
				color: theme.palette.warning.main
			}
		},
		iconDelete: {
			marginRight: 5,
			cursor: 'pointer',
			'&:hover': {
				color: theme.palette.error.main
			}
		},
		divLoading: {
			flex: 1,
			display: 'flex',
			marginTop: 150,
			justifyContent: 'center',
			alignItems: 'center'
		}
	})
)
