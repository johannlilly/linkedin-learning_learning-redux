import C from '../constants'
import appReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'

// middleware
const consoleMessages = store => next => action => {

	let result

	console.groupCollapsed(`dispatching action => ${action.type}`)
	console.log('ski days', store.getState.allSkiDays.length)
	result = next(action)

	// after the above is dispatched, we can get information about the current state
	let { allSkiDays, goal, errors, resortNames } = store.getState()

	console.log(`

		ski days: ${allSkiDays.length}
		goal: ${goal}
		fetching: ${resortNames.fetching}
		suggestions: ${resortNames.suggestions}
		errors: ${errors.length}

	`)

	// now we can get all of the information using the store state

	console.groupEnd()

	return result

}

export default (initialState={}) => {
	return createStore(appReducer, initialState)
}