import C from './constants'
// here, we are destructuring a goal import
// in the reducers file, we need to export the goal reducer (a function)
import { goal } from './store/reducers'

// before you build the reducer, write code that will show how the reducer is supposed to work

// const prevents the value from changing
// we can do this because reducers are pure functions
// we don't modify the value, we create a new value
const state = 10

// actions, at minimum, are objects with a type field
// it also needs to contain any information that's required to make the change, specifically, we need the new goal value
// this action contains a state mutation where we change the goal, whatever its current value, to 15 
const action = {
	// set the goal of the object, C, which contains the "actions" of our application
	type: C.SET_GOAL,
	payload: 15
}

// use the reducer to get the new value
// the goal reducer is a function that takes a given state and action, then returns a new state
const nextState = goal(state,action)

// we have to use JSON.stringify to display action because is an object
console.log(`
	
	initial goal: ${state}
	action: ${JSON.stringify(action)}
	new goal: ${nextState}

`)