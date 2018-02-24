import C from '../constants'

// reducers are just functions

// function goal(state, action) {
// this prevents us from changing the function by using the const keyword
export const goal = (state=10, action) => {

	if (action.type === C.SET_GOAL) {
		// return the new goal, which is in action.payload
		return action.payload
	} else {
		// return original state
		return state
	}

}