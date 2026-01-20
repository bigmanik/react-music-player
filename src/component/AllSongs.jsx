
 import { useMusic } from "../contexts/MusicContext";



export const AllSongs = () => {
    const {allSongs, handlePlaySong, currentTrackIndex} = useMusic();
    return (
        <div className="all-songs">
            <h2>All songs({allSongs.length})</h2>
            <div className="songs-grid">
                {allSongs.map((song, key)=>(
                    <div key={key} className= {`song-card ${currentTrackIndex === key ? "active" : ""}`}
                     onClick={ ()=> handlePlaySong(song, key)}>
                        <div className="song-info">
                            <h3 className="song-title">{song.title}</h3>
                            <p  className="song-artist">{song.artist}</p>
                        </div>
                        <div className="play-button">
                             {currentTrackIndex === key ? <img width="24" height="24"
                              src="https://img.icons8.com/material-sharp/24/apple-music.png" alt="apple-music"/>
                               :
                                <img width="20" height="20"
                              src="https://img.icons8.com/fluency-systems-filled/50/play.png" alt="play"/>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}