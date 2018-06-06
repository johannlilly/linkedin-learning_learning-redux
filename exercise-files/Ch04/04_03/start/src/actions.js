import C from './constants'

export function addDay(resort, date, powder=false, backcountry=false) {

	return {
		type: C.ADD_DAY,
		payload: {resort,date,powder,backcountry}
	}

}

export const removeDay = function(date) {

	return {
		type: C.REMOVE_DAY,
		payload: date
	}

}

export const setGoal = (goal) => 
	({
		type: C.SET_GOAL,
		payload: goal
	})

export const addError = (message) => 
   ({
   	  type: C.ADD_ERROR,
   	  payload: message
   })

export const clearError = index => 
	({
		type: C.CLEAR_ERROR,
		payload: index
	})   

export const changeSuggestions = suggestions => 
  ({
  	type: C.CHANGE_SUGGESTIONS,
  	payload: suggestions
  })

export const clearSuggestions = () => 
	({
		type: C.CLEAR_SUGGESTIONS
	})




// thunks don't return the action object directly
// thunks return another function
export const randomGoals = () => (dispatch, getState) => {
	// we can control when we dispatch actions
	// we can also get information about the present state with getState

	if (!getState().resortNames.fetching) {
		dispatch({
			type: C.FETCH_RESORT_NAMES,

		})
		// after 1.5 seconds, dispatch another action
		setTimeout(() => {
			dispatch({
				type: C.CANCEL_FETCHING
			})
		}, 1500)
	}

}

