import Loader from '../Loader'
import styles from './LoaderWithBackground.module.css'
import React from 'react'

const LoaderWithBackground = ({ loading, position = 'absolute' }) => {
	if (loading) {
		return (
			<>
				<Loader position={position} />
				<div className={styles.Background} />
			</>
		)
	}
	return null
}

export default LoaderWithBackground
