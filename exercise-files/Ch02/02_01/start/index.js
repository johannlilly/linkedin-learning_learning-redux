import C from './constants'
import { allSkiDays, goal } from './initialState.json'

// use backticks for ES6 string templates
// Object.keys() returns an array of all of the keys in a file
console.log(`
	
	Ski Day Counter
	===============
	The goal is ${goal} days
	Initially there are ${allSkiDays.length} in state

	Constants (actions)
	-------------------
	${Object.keys(C).join('\n      ')}

`)