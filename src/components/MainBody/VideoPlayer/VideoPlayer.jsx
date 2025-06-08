import React from 'react'
import './VideoPlayer.css'
import usePexelsVideos from '../../../hooks/usePexelVideo'
import djVideo from '../../../video/dj-video.mp4'
import ReactPlayer from 'react-player'

const VideoPlayer = () => {
/*   const {videos, loading, error } = usePexelsVideos('search','technology',5)
  console.log("<<SS>>",videos) */
  return (
    <div className='video-player-main-wrapper' data-testid="video-player-wrapper">
      <div className='video-player-container'>
        <div className='video-player-video'>
{/*           <video width={800} height={300}autoPlay={true} controls>
            <source src={djVideo} type='video/mp4'/>
            Your Browser does not support video
          </video> */}
          {/* <ReactPlayer url={'https://www.youtube.com/watch?v=Cp-1t9B62zc'}/> */}
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer