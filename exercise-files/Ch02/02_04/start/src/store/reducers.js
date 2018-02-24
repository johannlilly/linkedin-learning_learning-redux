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
		default : 
			return state
	}
}