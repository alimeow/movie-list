import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

var MovieList = (props) => {
  return (
    <div className='movieBox'>
      {
        props.movies.map((movie, index) => (
          <MovieListEntry key={index} movie={movie}/>
        ))
      }
    </div>
  )
}

export default MovieList;
