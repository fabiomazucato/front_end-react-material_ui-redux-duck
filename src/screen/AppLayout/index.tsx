import React, { Fragment } from 'react'

/* Material UI */
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import CssBaseline from '@material-ui/core/CssBaseline'

/* Components */
import Routes from '../../config/Routes'
import Header from './Header'
import Breadcrumb from './Breadcrumb'
import Footer from './Footer'

function AppLayout(): JSX.Element {
	return (
		<Fragment>
			<Header />
			<Breadcrumb />
			<Container maxWidth='lg'>
				<Routes />
			</Container>
			<Footer />
		</Fragment>
	)
}

export default AppLayout
