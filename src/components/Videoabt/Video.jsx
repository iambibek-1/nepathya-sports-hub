import React, { useRef } from 'react'
import './Video.css'
import video from '../../assets/sport-video.mp4'

export default function Video({playState, setplayState}) {

    let player = useRef(null);    
    let closePlayer =(e)=>{
        if(e.target === player.current){
            setplayState(false);
        }
    }

  return (
    <div className={`video-player ${playState ? '': 'hide'}`} ref={player} onClick={closePlayer} >
        <video src={video} autoPlay controls></video>
    </div>
  )
}
