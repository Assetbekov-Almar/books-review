import React, {useState} from 'react'
import styles from './HeaderTabs.module.css'
import {Link, useNavigate} from 'react-router-dom'
import LocalStorageService from "../../../infrastructure/service/storage/LocalStorageService";

const HeaderTabs = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState(null)

  const tabs = [
    {name: 'Library', pathname: '/books-review/library'},
    {name: 'My Bookshelf', pathname: '/books-review/bookshelf'},
    {name: 'Contacts', pathname: '/books-review/contacts'}
  ]

  const handleClick = (name) => () => {
    setActiveTab(name)
  }

  const handleSignOutClick = () => {
    LocalStorageService.clear()
    navigate('/auth')
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
        <button className={styles.exit_btn} onClick={handleSignOutClick}>Sign out</button>
      </ul>
    )
}

export default HeaderTabs
