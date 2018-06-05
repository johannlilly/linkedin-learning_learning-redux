import C from './constants'
import appReducer from './store/reducers'
import { createStore } from 'redux'

const store = createStore(appReducer)

// logger to log goals
store.subscribe(() => console.log(`    Goal: ${store.getState().goal}`))

setInterval(() => {

	store.dispatch({
		type: C.SET_GOAL,
		payload: Math.random() * 100)
	})

}, 250)

// four times per second, we should see these goals being logged to the console