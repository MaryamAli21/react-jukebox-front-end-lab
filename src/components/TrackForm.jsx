import React, { useState } from 'react';

const TrackForm = ({ track, onSubmit }) => {
  const [title, settitle] = useState(track ? track.title : '');
  const [artist, setArtist] = useState(track ? track.artist : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: track ? track.id : null, title, artist });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => settitle(e.target.value)}
        placeholder="Track title"
      />
      <label htmlFor="artist">artist</label>
      <input
        type="text"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        placeholder="Track artist"
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default TrackForm;