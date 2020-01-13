import { createStore, Store } from 'redux'
import { IApplicationState } from './types'

import reducers from './ducks'

const store: Store<IApplicationState> = createStore(reducers)

export default store
