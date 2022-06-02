import React, { lazy, Suspense } from 'react'
import { connect } from 'react-redux'
import InitLoader from '../InitLoader'

const AppDesktop = lazy(() => import('../../../desktop/components/Routes'))
const AppMobile = lazy(() => import('../../../mobile/components/Routes'))

const AppSelector = ({ isDesktop }) => {
	return <Suspense fallback={<InitLoader />}>{isDesktop ? <AppDesktop /> : <AppMobile />}</Suspense>
}

const mapStateToProps = (state) => {
	return {
		isDesktop: state.appType.isDesktop,
	}
}

export default connect(mapStateToProps)(AppSelector)
