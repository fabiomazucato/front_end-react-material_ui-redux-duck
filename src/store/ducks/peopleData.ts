import { createActions, createReducer } from 'reduxsauce'
import { IPerson } from '../../models/Person'
/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
	setPeople: ['people'],
	addPerson: ['person'],
	togglePerson: ['id'],
	removePerson: ['id']
})

/**
 * Handlers
 */
const INITIAL_STATE: Array<IPerson> = []

const set = (state = INITIAL_STATE, action: any) => action.people

const add = (state = INITIAL_STATE, actions: any) => [actions.person, ...state]

const toggle = (state = INITIAL_STATE, actions: any) =>
	state.filter(person => person.id === actions.id)

const remove = (state = INITIAL_STATE, actions: any) =>
	state.filter(person => person.id !== actions.id)

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
	[Types.SET_PEOPLE]: set,
	[Types.ADD_PERSON]: add,
	[Types.TOGGLE_PERSON]: toggle,
	[Types.REMOVE_PERSON]: remove
})
