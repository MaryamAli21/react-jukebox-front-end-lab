import React from 'react';

const TrackList = ({ tracks, onEdit, onDelete, onPlay }) => (
  <ul>
    {tracks.map(track => (
      <li key={track._id}>
       <h2> {track.title}</h2>
       <p>{track.artist}</p> 
        <button onClick={() => onEdit(track._id)}>Edit</button>
        <button onClick={() => onDelete(track._id)}>Delete</button>
        <button onClick={() => onPlay(track._id)}>Play</button>
      </li>
    ))}
  </ul>
);

export default TrackList;