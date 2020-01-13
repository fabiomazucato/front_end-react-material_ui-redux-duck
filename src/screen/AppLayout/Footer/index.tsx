import React from 'react'

/* Material UI */
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import { useStyles } from './styles'

export default function Footer() {
	const classes = useStyles()

	return (
		<footer className={classes.footer}>
			<Container maxWidth='lg' fixed>
				<Typography variant='body1'>
					<small>
						{
							'Projeto demo com React, Material UI, Redux e Duck Pattern. Jan/2020'
						}
					</small>
				</Typography>
			</Container>
		</footer>
	)
}
