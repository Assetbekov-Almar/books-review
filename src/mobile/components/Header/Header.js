import React from 'react'
import styles from './Header.module.css'
import HeaderLogo from './HeaderLogo'
import github from "../../../assets/images/github.svg";
import gitlab from "../../../assets/images/gitlab.svg";

const Header = () => {
    return (
        <header className={styles.header}>
            <HeaderLogo />
          <div className="downloadPrompt">
            <div className="promptControllers">
              <button className="downloadButton">Download</button>
            </div>
          </div>
            <div className="flex justify-center items-center gap-x-1.5 mt-4 lg:mt-0">
              <a href='https://github.com/Assetbekov-Almar' target="_blank" rel="noreferrer" >
                <img src={github} alt='github' />
              </a>
              <a href='https://gitlab.com/almar-a' target="_blank" rel="noreferrer" >
                <img src={gitlab} className="w-8 h-8" alt='gitlab' />
              </a>
            </div>
        </header>
    )
}

export default Header
