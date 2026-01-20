 import { useState } from "react"
import { useMusic } from "../contexts/MusicContext";


export const Playlist = () => {
    const [newPlaylistName, setNewPlaylistName] = useState("");

    const {playlists, createPlaylist} = useMusic();
    if (newPlaylistName.trim()){
                 createPlaylist(newPlaylistName.trim());
                 setNewPlaylistName("");
    }

    const handleCreatePlaylist = () =>{

    }
    return (
        <div className="playlists">
            <h2>Playlists</h2>

            {/* create newplaylist */}
            <div className="create-playlist"> 
                <h3> Create New Playlist</h3>
                <div className="playlist-form"> 
                    <input type="text" placeholder="playlist name.."  className="playlist-input" onChange={ (e) =>
                        setNewPlaylistName(e.target.value) } value={newPlaylistName} /> 
                        <button className="create-btn" onClick={handleCreatePlaylist} > create</button>
                </div>
            </div>
            {/* playlists List */}
            <div className = "playlists-list"> 
                {playlists.length ===0 ? (<p className="empty-message"> No playlists created yet </p>) 
                :  (
                    playlists.map((playlist, key) =><div className="playlist-item" key={key}> 
                    <div className="playlist-header"></div>
                    
                    </div> )
                    )}
                </div>
        </div>
    );
};