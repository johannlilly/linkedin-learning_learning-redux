import C from './constants'
// no need to destructure because we have a default export
import appReducer from './store/reducers'
import initialState from './initialState.json'

// we are going to mutate state
let state = initialState

console.log(`

	Initial this.state
	==================
	goal: ${state.goal}
	resorts: ${JSON.stringify(state.allSkiDays)}
	fetching: ${state.resortNames.fetching}
	suggestions: ${state.resortNames.suggestions}

`)

state = appReducer(state, {
	type: C.SET_GOAL,
	payload: 2
})

// also add ski day
// at this point, mutation will have occured
state = appReducer(state, {
	type: C.ADD_DAY,
	payload: {
		"resort": "Mt Shasta",
		"date": "2016-10-28",
		"powder": false,
		"backcountry": true
	}
})

// lets also get some suggestions
state = appReducer(state, {
	type: C.CHANGE_SUGGESTIONS,
	payload: ["Mt Tallac", "Mt Hood", "Mt Shasta"]
})

console.log(`

	Next state
	==================
	goal: ${state.goal}
	resorts: ${JSON.stringify(state.allSkiDays)}
	fetching: ${state.resortNames.fetching}
	suggestions: ${state.resortNames.suggestions}

`)