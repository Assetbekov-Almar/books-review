import {Link, useLocation} from "react-router-dom";
import React, {useEffect, useState} from "react";
import styles from './BottomNavigation.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBooks, faBookOpen, faEnvelopeOpen} from "@fortawesome/pro-solid-svg-icons"

const BottomNavigation = () => {
	const location = useLocation()
	const pathname = location.pathname
	const [activeTab, setActiveTab] = useState(null)

	const tabs = [
		{name: 'Library', pathname: '/books-review/library', icon: faBookOpen},
		{name: 'My Bookshelf', pathname: '/books-review/bookshelf', icon: faBooks},
		{name: 'Contacts', pathname: '/books-review/contacts', icon: faEnvelopeOpen}
	]

	useEffect(() => {
		const currentTab = tabs.find((tab => tab.pathname === pathname))
		setActiveTab(currentTab?.name || tabs[0].name)
	}, [])

	const handleClick = (name) => () => {
		setActiveTab(name)
	}

	return (
		<ul className={styles.BottomNavigation}>
			{tabs.map((tab, index) => (
				<li key={index}
						onClick={handleClick(tab.name)}
						className={styles.BottomNavigation__item}>
					<Link to={tab.pathname} className={styles.BottomNavigation__link}>
						<FontAwesomeIcon icon={tab.icon} className={`${styles.Link__icon} ${activeTab === tab.name ? styles.Link__icon_active : ''}`} />
						<span className={`${styles.Link__text} ${activeTab === tab.name ? styles.Link__text_active : ''}`}>{tab.name}</span>
					</Link>
				</li>
			))}
		</ul>
	)
}

export default BottomNavigation