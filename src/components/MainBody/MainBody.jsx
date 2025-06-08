import React from 'react'
import styles from "./MainBody.module.css"
import MainVideoPlayer from './MainVideoPlayer/MainVideoPlayer'
import MainVideoInfo from './MainVideoInfo/MainVideoInfo'
import SubVideos from './SubVideos/SubVideos'

const MainBody = () => {
  return (
    <div className={styles.mainBodyWrapper} data-testid="main-body-wrapper">
      <div className={styles.mainVideo}>
        <MainVideoPlayer />
        <MainVideoInfo />
      </div>
      <div className={styles.subVideo}>
        <SubVideos />
      </div>
    </div>
  )
}
export default MainBody
