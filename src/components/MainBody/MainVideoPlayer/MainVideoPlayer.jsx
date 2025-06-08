import React from 'react'
import styles from "./MainVideoPlayer.module.css"
import VideoPlayer from '../../../utils/VideoPlayer/VideoPlayer'

const MainVideoPlayer = () => {
  return (
    <section className={styles.mainVideoPlayer}>
    MainVideoPlayer
    <VideoPlayer/>
    </section>
  )
}

export default MainVideoPlayer