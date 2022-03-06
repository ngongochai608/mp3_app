import './App.css';
import { useState } from 'react';
import Navigation from './components/Navigation';
import SongDetail from './components/SongDetail';
import ListSongs from './components/ListSongs'
import { Songs } from './Context';
import DataSongs from './data/songs.json'
import Playing from './components/Playing';

function App() {
  const [song, setSong] = useState(DataSongs[0]);

  const handleSetSong = id => {
      if (id >= 0 && id <= DataSongs.length - 1) {
        const currentSong = DataSongs.find(song => song.id === id);
        setSong(currentSong);
      }
  }

  return (
    <div className="App">
        <Songs.Provider value={{DataSongs, song, handleSetSong}}>
          <Navigation />
          <div className='grid grid-cols-3 bg-[#170f23] h-height-body pt-[50px] overflow-hidden'>
              <SongDetail />
              <ListSongs />
          </div>
          <Playing />
        </Songs.Provider>
    </div>
  );
}

export default App;
