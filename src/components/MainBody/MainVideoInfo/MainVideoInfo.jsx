import React, { useContext } from 'react'
import styles from './MainVideoInfo.module.css'
import { BsPersonCircle } from "react-icons/bs";
import { VideoContext } from '../../../App';

const MainVideoInfo = () => {
  const {videoData, featuredVideo} = useContext(VideoContext)
  console.log("<<S>>",featuredVideo)
  return (
    <>    
      {featuredVideo && Object.keys(featuredVideo).length > 0 ? (
        <section className={styles.mainVideoInfo}>
        <div style={{display: 'flex', gap: 20}}>
          <BsPersonCircle size={48}/>
          <div>
            <span style={{display:'block', alignItems: 'center', justifyContent: 'center'}}>{featuredVideo?.user?.name}</span>
            <a href={featuredVideo?.user?.url} target="_blank" rel="noopener noreferrer">More Info</a>
          </div>
        </div>
        <div style={{  display: 'flex',
  flexWrap: 'wrap',    gap: '10px',}}>
{/*     {featuredVideo?.video_pictures?.map((item) => (
                  <img src={item.picture} alt={item.nr}/>
    ))} */}
    <img src={featuredVideo?.image} alt='hello' width={200} height={300}/>

        </div>
      </section>
      ) : null}
    </>
  )
}

export default MainVideoInfo