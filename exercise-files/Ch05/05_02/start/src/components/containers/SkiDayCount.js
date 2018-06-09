import SkiDayCount from '../ui/SkiDayCount'
// connect creates a component that grabs the store out of state and can map state from the store to properties in a child component
import { connect } from 'react-redux'

const mapStateToProps = (state) => {

	// take data from state and map it

	// return an object with the names of the properties we want to map to as keys, and the data we want to include in those properties as their values.
	return {
		total: state.allSkiDays.length,
		// return true (into the new array) only if powder day (day is like i)
		powder: state.allSkiDays.filter(day => day.powder).length
		backcountry: state.allSkiDays.filter(day => day.backcountry).length
	}
}

// map to UI component
// connect() returns a function, so we pass SkiDayCount to the return function
const Container = connect(mapStateToProps)(SkiDayCount)

export default Container

// OLD
// export default () => <SkiDayCount total={100} powder={25} backcountry={10} />

// this container maps data from the store to properties from SkiDayCount