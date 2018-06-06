import C from './constants'
import fetch from 'isomorphic-fetch'

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





// returns function, which gets the dispatch method injected as an arg
export const suggestResortNames = value => (dispatch) => {
	// change state value of fetching from false to true
	dispatch({
		type: C.FETCH_RESORT_NAMES
	})
	// make request
	fetch('http://localhost:3333/resorts/' + value)
	// isomorphic-fetch returns a promise, so we can wait for an asyncronous response
		// we can configure a response when it occurs
		.then(response => response.json())
		// received response, now dispatch
		.then(suggestions => {
			dispatch({
				type: C.CHANGE_SUGGESTIONS,
				payload: suggestions
			})
		})
		// error handling
		.catch(error => {
			dispatch(
				// don't dispatch action object; use the action creator
				addError(error.message)
			)

			dispatch({
				type: C.CANCEL_FETCHING
			})
		})
}

