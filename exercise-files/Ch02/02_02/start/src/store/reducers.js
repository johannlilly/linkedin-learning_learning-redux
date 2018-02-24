import C from '../constants'

// reducers are just functions

function goal(state, action) {

	if (action.type === C.SET_GOAL) {
		// return the new goal, which is in action.payload
		return action.payload
	} else {
		// return original state
		return state
	}

}