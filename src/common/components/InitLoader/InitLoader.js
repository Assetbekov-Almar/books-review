import React from 'react'
import './InitLoader.css'

export default function InitLoader() {
	return (
		<div className="container">
			<div className="loader book">
				<figure className="page"></figure>
				<figure className="page"></figure>
				<figure className="page"></figure>
			</div>

			<h1 className="loader__title">Reading</h1>
		</div>
	)
}
