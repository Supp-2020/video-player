import React from 'react'
import djVideo from '../../../video/dj-video.mp4'
import './VideoPlayer.css'
import ReactPlayer from 'react-player'

const VideoPlayer = () => {
  return (
    <div className='video-player-main-wrapper' data-testid="video-player-wrapper">
      <div className='video-player-container'>
        <div className='video-player-video'>
{/*           <video width={800} height={300}autoPlay={true} controls>
            <source src={djVideo} type='video/mp4'/>
            Your Browser does not support video
          </video> */}
          <ReactPlayer url={'https://www.youtube.com/watch?v=Cp-1t9B62zc'}/>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer