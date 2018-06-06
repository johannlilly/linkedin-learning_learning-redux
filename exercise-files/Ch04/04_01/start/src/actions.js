import C from './constants'

// 3 functions
// all are action creators
// they all do the same thing even though we have declared them differently

export function addDay(resort, date, powder=false, backcountry=false) {

	// add application logic here
	// i.e. any functions you don't want to add (or are not supposed to add) in reducers

	// return an action object
	return {
		type: C.ADD_DAY,
		payload: {resort, date, powder, backcountry}
	}
}

// create a new action creator for removing a day

export const removeDay = function(date) {
	// return a new action of type REMOVE_DAY
	return {
		type: C.REMOVE_DAY,
		payload: date
	}
}

export const setGoal = (goal) => 
// use parentheses to return an object
	({
		type: C.SET_GOAL,
		payload: goal
	})