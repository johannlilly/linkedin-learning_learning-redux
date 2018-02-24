import C from '../constants'

export const goal = (state=10, action) => 
	(action.type === C.SET_GOAL) ? 
		 parseInt(action.payload) :
		 state


export const skiDay = (state=null, action) => 
  (action.type === C.ADD_DAY) ?
  	action.payload :
  	state

export const errors = (state=[], action) => {
	// we need to both add and remove errors
	switch(action.type) {
		case C.ADD_ERROR :
			// this would mutate the value of the existing array
			// state.push(action.payload)
			// instead:
			return [
				// use spread operator
				...state,
				// plus another value, the action payload, which is the description of a new error 
				action.payload
			]
		case C.CLEAR_ERROR : 
			// filter() expects a callback function
			// this callback function passes the error message and index so we can check the message
			// it will be invoked once for every message in the array
			// we call this particular function a Predicate because it expects true or false
			// if it returns true, the message will be added to the array
			// if it returns false, the message will be removed from the array
			return state.filter((message, i) => i !== action.payload)
		default : 
			return state
	}
}