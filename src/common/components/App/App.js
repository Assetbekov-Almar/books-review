import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { appInitStart } from '../../../infrastructure/redux/actions/appInit/actions'
import AppSelector from '../AppSelector'
import InitLoader from '../InitLoader'

function App({ isInit, error, appInitStart }) {
	const [isReady, setIsReady] = useState(false)

	useEffect(() => {
		appInitStart()
	}, [appInitStart])

	useEffect(() => {
		if (isInit) {
			setTimeout(() => {
				setIsReady(true)
			}, 1500)
		}
	}, [isInit])

	if (!isReady) return <InitLoader />

	if (error) return <div>Error</div>

	return <AppSelector />
}

const mapStateToProps = (state) => {
	return {
		isInit: state.appInit.isInit,
		error: state.appInit.error,
	}
}

const mapDispatchToProps = { appInitStart }

export default connect(mapStateToProps, mapDispatchToProps)(App)
