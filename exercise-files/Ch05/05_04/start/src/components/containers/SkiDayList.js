import SkiDayList from '../ui/SkiDayList'
import { connect } from 'react-redux'
import { removeDay } from '../../actions'

// can also take any props from parent
const mapStateToProps = (state, props) =>
  // return object
  ({
    days: state.allSkiDays,
    // props are provided from the router
    filter: props.params.filter
  })

const mapDispatchToProps = dispatch =>
  // return an object that actually maps function properties to my dispatch function
  ({
    onRemoveDay(date) {
      dispatch(
        removeDay(date)
      )
    }
  })

export default connect(mapStateToProps, mapDispatchToProps)(SkiDayList)

// pass from parent to container component
// we pass to UI component
/*
export default (props) =>
    <SkiDayList days={sample}
                filter={props.params.filter}
                onRemoveDay={date => console.log('remove day on', date)} />
*/