import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

/* screens */
import PeopleList from '../screen/People/List'
import PersonCreate from '../screen/People/Create'
import NotFound from '../screen/NotFound'

function Routes(): JSX.Element {
	return (
		<Switch>
			<Route path='/' exact render={() => <Redirect to='/people' />} />
			<Route path='/people' exact component={PeopleList} />
			<Route path='/people/create' exact component={PersonCreate} />
			<Route path='/404' exact component={NotFound} />
			<Redirect from='*' to='/404' />
		</Switch>
	)
}

export default Routes
