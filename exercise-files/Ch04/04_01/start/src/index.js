import storeFactory from './store'
import { addDay } from './actions'

const store = storeFactory()

// invoke action creator

store.dispatch(
	// takes args required to add a ski day
	addDay("Heavenly", "2016-12-22", true, false)
)