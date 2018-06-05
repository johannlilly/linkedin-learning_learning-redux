import C from './constants'
import appReducer from './store/reducers'
import { createStore } from 'redux'

const store = createStore(appReducer)

// logger to log goals
const unsubscribeGoalLogger = store.subscribe(
	() => console.log(`    Goal: ${store.getState().goal}`)
)

// four times per second, we should see these goals being logged to the console
setInterval(() => {

	store.dispatch({
		type: C.SET_GOAL,
		payload: Math.floor(Math.random() * 100)
	})

}, 250)

setTimeout(() => {

	unsubscribeGoalLogger();

}, 3000)

