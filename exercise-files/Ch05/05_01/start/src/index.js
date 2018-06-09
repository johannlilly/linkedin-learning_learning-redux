import C from './constants'
import React from 'react'
import { render } from 'react-dom'
import routes from './routes'
import sampleData from './initialState'
import storeFactory from './store'
// Provider is a component you can wrap around any component tree and it will place the store in context. Context is a feature that will allow any child react component to interact with the store if they want to
import { Provider } from 'react-redux'

const initialState = (localStorage["redux-store"]) ?
    JSON.parse(localStorage["redux-store"]) :
    sampleData

const saveState = () => 
    localStorage["redux-store"] = JSON.stringify(store.getState())

const store = storeFactory(initialState)
store.subscribe(saveState)

window.React = React
window.store = store

render(
	<Provider store={store}>
		{routes}
	</Provider>,
  document.getElementById('react-container')
)
