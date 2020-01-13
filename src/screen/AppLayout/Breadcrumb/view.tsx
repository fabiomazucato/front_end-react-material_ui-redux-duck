import React from 'react'

/* Material UI */
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
// import {
// 	ChevronRight as ChevronRightIcon,
// 	Home as HomeIcon
// } from '@material-ui/icons'

import { IViewProps } from './types'

function Breadcrumb(props: IViewProps): JSX.Element {
	const { pageBreadcrumb, classes } = props

	return (
		<Box className={classes.breadcrumb}>
			<Container maxWidth={undefined}>
				<Breadcrumbs separator='›' aria-label='breadcrumb'>
					{pageBreadcrumb.map((page: any, i: number) => (
						<Typography
							className={classes.font}
							color='textSecondary'
							key={i}
						>
							{page.breadcrumbName}
						</Typography>
					))}
				</Breadcrumbs>
			</Container>
		</Box>
	)
}

export default Breadcrumb
