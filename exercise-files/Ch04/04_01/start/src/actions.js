import C from './constants'

export function addDay(resort, date, powder=false, backcountry=false) {
	// return an action object
	return {
		type: C.ADD_DAY,
		payload: {resort, date, powder, backcountry}
	}
}