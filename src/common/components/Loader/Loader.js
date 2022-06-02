import React from 'react'
import './Loader.css'

const Loader = ({ position = 'absolute' }) => (
	<div className={'loader'} style={{ position }} data-testid='loader'>
		<div style={{ display: 'flex', justifyContent: 'center', alignSelf: 'center' }} className={`lds-ring`}>
			<div />
			<div />
			<div />
			<div />
		</div>
	</div>
)

export default Loader
