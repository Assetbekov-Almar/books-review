import React from 'react'
import styles from './HeaderTabs.module.css'
import { Link } from 'react-router-dom'

const HeaderTabs = () => {
    return (
        <ul className={styles.headerTabs}>
            <li className={styles.headerTabs__name}>
                <Link to='/library'>Library</Link>
            </li>
            <li className={styles.headerTabs__name}>
                <Link to='/bookshelf'>My Bookshelf</Link>
            </li>
            <li className={styles.headerTabs__name}>
                <Link to='/about'>About Us</Link>
            </li>
        </ul>
    )
}

export default HeaderTabs
