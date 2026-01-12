import { useEffect } from "react";
import { useMusic } from "../hooks/useMusic";
import { useRef } from "react";

const MusicPlayer = () => {
const {currentTrack, formatTime, currentTime, duration,
    setDuration, setCurrentTime, nextTrack, prevTrack, isPlaying, pause, play} = useMusic();

const audioRef = useRef(null);
useEffect(() =>{
   const audio = audioRef.current;
     if(!audio) return;

 if(isPlaying){
   audio.play().catch((err) => console.error(err));
 }else{
    audio.pause
 }
}, [isPlaying])
useEffect(() =>{
   const audio = audioRef.current;
   if(!audio) return;
   const handleLoadedMetadata = () => {
    setDuration(audio.duration);
  
   };
   const handleTimeUpdate = () => { 
      setCurrentTime(audio.currentTime);
   };
   const handleEnded = () => { 
      nextTrack();
   };
   
   audio.addEventListener("loadedmetadata", handleLoadedMetadata);
   audio.addEventListener("timeupdate", handleTimeUpdate);
   return () =>{
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
   }
}, [setDuration, setCurrentTime, currentTrack]);

    return <div className="music-player">
     <audio ref={audioRef} src={currentTrack.url} preload="metadata" crossOrigin="anonymous"/>

     <div className="track-info">
        <h3 className="track-title">{currentTrack.title}</h3>
        <p className="track-artist">{currentTrack.artist}</p>
     </div>
     <div className="progress-container">
        <span className="time">{formatTime(currentTime)}</span>
        <input type="range" min="0" max={duration || 0} step="0.1" value={currentTime || 0}  className="progress-bar"
        />
        <span className="time">{formatTime(duration)}</span>

     </div>
     <div className="controls">
      <button className="control-btn" onClick={prevTrack}><img width="24" height="24" 
      src="https://img.icons8.com/material-sharp/24/rewind.png" alt="rewind"/></button>
        <button className="control-btn play-btn"
         onClick={ ()=> ( isPlaying ? pause() : play())}>
         {  isPlaying ? <img width="24" height="24" 
         src="https://img.icons8.com/material-sharp/24/pause--v1.png" alt="pause--v1"/>
          : 
          <img width="20" height="20" src="https://img.icons8.com/fluency-systems-filled/50/play.png" alt="play"/> }
         
          </button>
          <button className="control-btn" onClick={nextTrack}><img width="24" height="24"
           src="https://img.icons8.com/material-sharp/24/fast-forward.png" alt="fast-forward"/></button>
     </div>
    </div>
}

export default MusicPlayer; 