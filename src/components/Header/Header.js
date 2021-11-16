import React from 'react'
import styles from './Header.module.css'
import HeaderLogo from './HeaderLogo'
import HeaderTabs from './HeaderTabs'

const Header = () => {
    return (
        <header className={styles.header}>
            <HeaderLogo />
            <HeaderTabs />
        </header>
    )
}

export default Header
