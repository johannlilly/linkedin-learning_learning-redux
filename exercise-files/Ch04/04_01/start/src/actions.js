import C from './constants'

export function addDay(resort, date, powder=false, backcountry=false) {

	// add application logic here
	// i.e. any functions you don't want to add (or are not supposed to add) in reducers

	// return an action object
	return {
		type: C.ADD_DAY,
		payload: {resort, date, powder, backcountry}
	}
}