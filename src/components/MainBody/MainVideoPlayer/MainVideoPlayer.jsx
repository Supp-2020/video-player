import React from 'react'
import styles from "./MainVideoPlayer.module.css"
import VideoPlayer from '../../../utils/VideoPlayer/VideoPlayer'

const MainVideoPlayer = () => {
  return (
    <div className={styles.mainVideoPlayer}>
    MainVideoPlayer
    <VideoPlayer/>
    </div>
  )
}

export default MainVideoPlayer