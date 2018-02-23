// these are simply strings at this point.
// when we use them in redux we will use their values.
// for now, use the key as the string value
const constants = {
	ADD_DAY: "ADD_DAY",
	REMOVE_DAY: "REMOVE_DAY",
	SET_GOAL: "SET_GOAL",
	ADD_ERROR: "ADD_ERROR",
	CLEAR_ERROR: "CLEAR_ERROR",
	FETCH_RESORT_NAMES: "FETCH_RESORT_NAMES",
	CANCEL_FETCHING: "CANCEL_FETCHING",
	CHANGE_SUGGESTIONS: "CHANGE_SUGGESTIONS",
	CLEAR_SUGGESTIONS: "CLEAR_SUGGESTIONS"
}

// we are storing these contants in a hash.
// this is a good way to prevent spelling errors in the future.

export default contants