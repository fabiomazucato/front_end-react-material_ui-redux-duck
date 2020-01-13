import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme =>
	//console.log(theme)
	({
		root: {
			display: 'flex',
			flexWrap: 'wrap',
			marginBottom: 30
		},
		textField: {
			width: '47%'
		},
		textFieldFull: {
			marginLeft: theme.spacing(1),
			marginRight: theme.spacing(1),
			width: '100%'
		},
		spaceBetween: {
			marginLeft: theme.spacing(1),
			marginRight: theme.spacing(1),
			width: '100%',
			display: 'flex',
			justifyContent: 'space-between'
		}
	})
)
