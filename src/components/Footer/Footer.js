import React from 'react'
import github from '../../assets/images/github.svg'
import gitlab from '../../assets/images/gitlab.svg'
import {Link} from "react-router-dom"
const Footer = () => (
	<footer className="border-t relative border-gray-200 w-1200 m-auto mt-6">
		<div
			className="container flex flex-wrap items-center justify-center py-8 mx-auto  lg:justify-between"
		>
			<div className="flex flex-wrap justify-center">
				<ul className="flex items-center space-x-4">
					<li><Link to={'/library'}>Library</Link></li>
					<li><Link to={'/bookshelf'}>My Bookshelf</Link></li>
					<li><Link to={'/contacts'}>Contacts</Link></li>
				</ul>
			</div>

			<div className='absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4'>Books Review © 2021</div>

			<div className="flex justify-center items-center gap-x-1.5 mt-4 lg:mt-0">
				<a href='https://github.com/Assetbekov-Almar' target="_blank" rel="noreferrer" >
					<img src={github} alt='github' />
				</a>
				<a href='https://gitlab.com/almar-a' target="_blank" rel="noreferrer" >
					<img src={gitlab} className="w-8 h-8" alt='gitlab' />
				</a>
			</div>
		</div>
	</footer>
)

export default Footer