import React, { useState, useEffect } from 'react';
import TrackList from './components/TrackList';
import TrackForm from './components/TrackForm';
import NowPlaying from './components/NowPlaying';
import { index, create, updateTrack, deleteTrack } from './services/trackService';

const App = () => {
  const [tracks, setTracks] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [nowPlaying, setNowPlaying] = useState(null);

  useEffect(() => {
    const fetchTracks = async () => {
      const data = await index();
      setTracks(data);
    };
    fetchTracks();
  }, []);

  const handleAddTrack = () => {
    setIsFormVisible(true);
    setCurrentTrack(null);
  };

  const handleEditTrack = (trackId) => {
    setIsFormVisible(true);
    setCurrentTrack(trackId);
  };

  const handleDeleteTrack = async (trackId) => {
    await deleteTrack(trackId);
    setTracks(tracks.filter(track => track.id !== trackId));
  };

  const handlePlayTrack = (trackId) => {
    setNowPlaying(trackId);
  };

  const handleSubmit = async (track) => {
    if (currentTrack) {
      const updatedTrack = await updateTrack(track, currentTrack);
      setTracks(tracks.map(t => (t.id === currentTrack ? updatedTrack : t)));
    } else {
      const newTrack = await create(track);
      setTracks([...tracks, newTrack]);
    }
    setIsFormVisible(false);
    setCurrentTrack(null);
  };

  return (
    <div>
      <button onClick={handleAddTrack}>Add New Track</button>
      <TrackList
        tracks={tracks}
        onEdit={handleEditTrack}
        onDelete={handleDeleteTrack}
        onPlay={handlePlayTrack}
      />
      {isFormVisible && (
        <TrackForm
          track={tracks.find(t => t.id === currentTrack)}
          onSubmit={handleSubmit}
        />
      )}
      {nowPlaying && <NowPlaying track={tracks.find(t => t.id === nowPlaying)} />}
    </div>
  );
};

export default App;