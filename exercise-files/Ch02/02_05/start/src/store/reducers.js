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

  switch(action.type) {

    case C.ADD_ERROR :

    	return [
         ...state,
         action.payload
    	]

    case C.CLEAR_ERROR : 

      return state.filter((message, i) => i !== action.payload)

  	default: 
  		return state

  }

}

export const allSkiDays = (state=[], action) => {

  switch(action.type) {

    case C.ADD_DAY :

      // some() tells us if some of the items match in the array
      // it takes a callback function, then invokes that function once for every skiDay in the current array
      const hasDayAlready = state.some(skiDay => skiDay.date === action.payload.date)

      // this mutates the array
      // return state.push()
      return (hasDayAlready) ?
        state :
      [
        ...state,
        // action.payload
        // instead, use the existing reducer and action
        skiDay(null, action)
      ]


    default:
      state

  }

}