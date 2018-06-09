import ShowErrors from '../ui/ShowErrors'
import { clearError } from '../../actions'
import { connect } from 'react-redux'

// OLD
/*
export default () =>
	<ShowErrors errors={['sample error']}
						  onClearError={index => console.log('todo: clear error at', index)} />
*/

// need to map state of errors to the error property
// also need to dispatch a clearError event when the user clicks the 'x'
const mapStateToProps = state => {

	// return object that contains keys for each of the properties of the ShowErrors component
	// when state loads, if there are any errors, they will be passed via the error property
	return {
		errors: state.errors
	}
} 

// map dispatch function to these component properties
const mapDispatchToProps = dispatch => {
	return {
		onClearError(index) {
			// also invokes this function
			dispatch(
				clearError(index)
			)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowErrors)