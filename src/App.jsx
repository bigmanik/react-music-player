import Navbar from "./component/Navbar"
import MusicPlayer from "./component/MusicPlayer"
import { BrowserRouter, Routes, Route } from "react-router";
import { AllSongs } from "./component/AllSongs";
import { Playlist } from "./component/Playlist";


function App() {
  
  return( 
    <BrowserRouter> 
   <div className="app">
   {/* <Navbar /> */}
   <main className="app-main">
      <div className="player-section">
          <MusicPlayer />
      </div>
      <div className=" content-section">
         <Routes>
          <Route path="/" element={<AllSongs />}></Route>
            <Route path="/playlists" element={<Playlist />}></Route>
         </Routes>
      </div>
   </main>
  </div>
   </BrowserRouter>
  );
}

export default App
