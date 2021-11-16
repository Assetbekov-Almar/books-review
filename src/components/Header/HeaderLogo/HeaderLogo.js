import React from 'react'
import styles from './HeaderLogo.module.css'
import logo from '../../../assets/images/logo.webp'

export default function HeaderLogo() {
    return <img className={styles.headerLogo} src={logo} alt='logo' />
}
