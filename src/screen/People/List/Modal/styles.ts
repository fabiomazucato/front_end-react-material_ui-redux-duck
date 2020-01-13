import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			height: 480,
			flexGrow: 1,
			transform: 'translateZ(0)',
			overflow: 'auto',
			'@media all and (-ms-high-contrast: none)': {
				display: 'none'
			}
		},
		modal: {
			display: 'flex',
			padding: theme.spacing(1),
			alignItems: 'center',
			justifyContent: 'center'
		},
		paper: {
			width: 600,
			height: 600,
			backgroundColor: '#FFF',
			border: '2px solid #636363',
			boxShadow: theme.shadows[5],
			padding: theme.spacing(2, 4, 3)
		},
		dividerFullWidth: {
			margin: `5px 0 0 ${theme.spacing(2)}px`
		},
		dividerInset: {
			margin: `5px 0 0 ${theme.spacing(9)}px`
		},
		headerModal: {
			display: 'flex',
			justifyContent: 'space-between'
		},
		closeButton: {
			cursor: 'pointer',
			marginTop: 10,
			'&:hover': {
				color: theme.palette.error.main
			}
		}
	})
)
