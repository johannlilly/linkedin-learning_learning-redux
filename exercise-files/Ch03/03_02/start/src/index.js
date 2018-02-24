import C from './constants'
import appReducer from './store/reducers'
import initialState from './initialState.json'
// createStore is used to build instances of Redux stores
import { createStore } from 'redux'

// CREATE
// createStore expects one argument at minimum: the reducer function used by the store
const store = createStore(appReducer, initialState)
// now, the store holds state and manages state
// sending the intial state to the store will set up the store initially with three ski days

// READ current state
// you can look at the current state using getState()
// by default, just using appReducer, our initial state will be created by all the default variables we created by every reducer
console.log('initialState', store.getState())
// the store will use the appReducer to help calculate the initial state
// once every reducer is invoked once, the default value of that reducer will be saved as the initial state

// UPDATE (mutate)
// dispatch dispatches actions that mutates the state
// this should add a ski day to the state of all ski days.
store.dispatch({
	type: C.ADD_DAY,
	payload: {
		"resort": "Mt Shashta",
		"date": "2016-10-28",
		"powder": false,
		"backcountry": true
	}
})

console.log('next state', store.getState())

// 