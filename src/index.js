import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import { getProducts } from './actions'

import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
const store = configureStore()

store.dispatch(getProducts())
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'))
registerServiceWorker()
