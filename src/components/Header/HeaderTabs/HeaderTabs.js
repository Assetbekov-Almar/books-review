import React, {useState} from 'react'
import styles from './HeaderTabs.module.css'
import { Link } from 'react-router-dom'

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState(null)

  const tabs = [
    {name: 'Library', pathname: 'library'},
    {name: 'My Bookshelf', pathname: 'bookshelf'},
    {name: 'Contacts', pathname: 'contacts'}
  ]

  const handleClick = (name) => () => {
    setActiveTab(name)
  }

    return (
        <ul className={styles.headerTabs}>
          {tabs.map((tab, index) => (
            <li key={index}
                onClick={handleClick(tab.name)}
                className={`${styles.headerTabs__name} ${activeTab === tab.name ? styles.active : ''}`}>
              <Link to={tab.pathname}>{tab.name}</Link>
            </li>
          ))}
        </ul>
    )
}

export default HeaderTabs
