import React from 'react';

const NowPlaying = ({ track }) => (
  <div>
    <h2>Now Playing</h2>
    <p>{track ? track.title : 'No track playing'}</p>
  </div>
);

export default NowPlaying;