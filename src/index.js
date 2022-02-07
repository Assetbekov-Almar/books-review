import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import store from './infrastructure/redux/store'
import { BrowserRouter as Router } from 'react-router-dom'
import App from "./components/App"
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

const app = (
  <Provider store={ store }>
    <Router>
      <App />
    </Router>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))

serviceWorkerRegistration.register()