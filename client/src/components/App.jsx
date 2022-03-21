import React from 'react';
import Search from './Search.jsx';
// import movies from '../data/movieData.js';
import MovieList from './MovieList.jsx';
import UserMovies from './UserMovies.jsx';
import WatchedMovies from './WatchedMovies.jsx';

var newMovies = [];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allMovies: newMovies,  //container to hold every user input
      movieWatched: false
    }
    this.toggleState = this.toggleState.bind(this);
    this.alterWatched = this.alterWatched.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.addUserInputMovies = this.addUserInputMovies.bind(this);
  }

  alterWatched(movieObj) {
    let m = newMovies.slice();
    for (var i = 0; i < m.length; i++) {
      if (movieObj.title === m[i].title && movieObj.id === m[i].id) { //&& movieObj.id === m[i].id
        m[i]['watched'] = !m[i]['watched']; //
      }
    }
    this.setState({allMovies: m})
  }

  toggleState(val) {
    this.setState({movieWatched: val})
  }

  filterMovies(value) {
    let filteredMovies = this.state.allMovies.filter((movie, index) => (
      movie.title.toLowerCase().includes(value.toLowerCase()) // why does a ; here affect the whole thing?
    ));
    this.setState( {allMovies: filteredMovies} )
  }

  //add user entered movies to allMovies
  addUserInputMovies(val) {
    // let moviesAdded = this.state.allMovies.slice();
    var valUniq = newMovies.every((movie) => movie.title != val);
    if (valUniq) {
      let newMovie = {}; //create an instance of obj to hold the new movie
      newMovie['id'] = newMovies.length + 1;   //might not be necessary
      newMovie['title'] = val;
      newMovie['watched'] = false;
      newMovies.push(newMovie);
      // moviesAdded.push(newMovie);
      // this.setState( {allMovies: moviesAdded} )
      this.setState( {allMovies: newMovies} )
    }
  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <UserMovies inputMovie={this.addUserInputMovies}/>
        <Search searchMovies={this.filterMovies}/>
        <WatchedMovies toggleState={this.toggleState}/>
        {/* //movies is a key to Movielist props to take in, this.state.allMovies is the data past in */}
        <MovieList movies={this.state.allMovies} alterWatch={this.alterWatched} movieState={this.state.movieWatched}/>
      </div>
    )
  }
};


export default App;