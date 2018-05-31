import C from './constants'
import appReducer from './store/reducers'
// import initialState from './initialState.json'
import { createStore } from 'redux'

const store = createStore(appReducer)

store.subscribe(() => console.log(store.getState()))
// store has a subscribe method which allows you to subscribe callback handlers that are invoked every time state changes
store.dispatch({
	type: C.ADD_DAY,
	payload: {
		"resort": "Mt Shasta",
		"date": "2016-10-28",
		"powder": false,
		"backcountry": true
	}
})