import "./App.css";
import { Route, Routes } from "react-router";

import Home from "./views/Home";
import Artists from "./views/Artists";
function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/artists" element={<Artists />} />
      {/* <Route path="/artists/:id" element={<SingleArtist />} />
      <Route path="/genres" element={<Genres />} />
      <Route path="/genres/:id" element={<SingleGenre />} />
      <Route path="/songs" element={<Songs />} />
      <Route path="/songs/:id" element={<SingleSong />} />
      <Route path="/playlists" element={<Playlists />} />
      <Route path="/playlists/:id" element={<SinglePlaylist />} /> */}
    </Routes>
  );
}

export default App;
