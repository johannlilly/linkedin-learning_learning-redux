import C from './constants'
import { errors } from './store/reducers'

const state = [
	// sample error messages
	"user not authorized",
	"server feed not found"
]

const action = {
	type: C.CLEAR_ERROR,
	// this time, the payload is the value of the error
	payload: 0
}
// we expect the next state to have a third error
const nextState = errors(state, action)

console.log(`

    initial state: ${state}
    action: ${JSON.stringify(action)}
    new state: ${JSON.stringify(nextState)}

`)