import React from 'react';

const MovieListEntry = ({movie}) => {
  return (
    <div className='movieTitle'>
      {movie.title}
    </div>
  )
}

export default MovieListEntry;
