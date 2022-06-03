import React from "react"
import styles from './DownloadButton.module.css'
import LocalStorageService from "../../../infrastructure/service/storage/LocalStorageService"
import {IS_INSTALLED} from "../../../infrastructure/service/storage/config"

const DownloadButton = () => {
	const isInstalled = LocalStorageService.getItem(IS_INSTALLED)

	return (
		<div className="downloadPrompt" style={isInstalled ? {display: 'none'} : {margin: '10px 0'}}>
			<div className="promptControllers">
				<button className={`${styles.Download__button} downloadButton`}>Install</button>
			</div>
		</div>
	)
}

export default DownloadButton