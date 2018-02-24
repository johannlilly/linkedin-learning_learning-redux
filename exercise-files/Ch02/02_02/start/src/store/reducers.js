import C from '../constants'

// reducers are just functions

// function goal(state, action) {
// this prevents us from changing the function by using the const keyword
export const goal = (state=10, action) => {

	// SET_GOAL is one of our actions included in the constants JSON file
	if (action.type === C.SET_GOAL) {
		// return the new goal, which is in action.payload
		return parseInt(action.payload)
	} else {
		// return original state
		return state
	}

}