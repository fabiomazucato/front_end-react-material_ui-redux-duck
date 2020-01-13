import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import { SnackbarProvider } from 'notistack'

/* Material UI */
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'

/* Components */
import AppLayout from './screen/AppLayout'

import theme from './assets/theme'

const app = (
	<Provider store={store}>
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<SnackbarProvider maxSnack={3}>
					<AppLayout />
				</SnackbarProvider>
			</ThemeProvider>
		</BrowserRouter>
	</Provider>
)

ReactDOM.render(app, document.getElementById('root'))
