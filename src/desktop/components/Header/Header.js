import React from 'react'
import styles from './Header.module.css'
import HeaderLogo from './HeaderLogo'
import HeaderTabs from './HeaderTabs'

const Header = () => {
    return (
        <header className={styles.header}>
            <HeaderLogo />
            <div className="downloadPrompt">
              <div className="promptControllers">
                <button className="downloadButton">Download</button>
              </div>
            </div>
            <button className="notificationButton">Show Notification</button>
            <HeaderTabs />
        </header>
    )
}

export default Header
