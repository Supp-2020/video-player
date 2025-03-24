import React from 'react'
import djVideo from '../../../video/dj-video.mp4'
import './VideoPlayer.css'

const VideoPlayer = () => {
  return (
    <div className='video-player-main-wrapper' data-testid="video-player-wrapper">
      <div className='video-player-container'>
        <div className='video-player-video'>
          <video width={300} autoPlay={true} controls>
            <source src={djVideo} type='video/mp4'/>
            Your Browser does not support video
          </video>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer