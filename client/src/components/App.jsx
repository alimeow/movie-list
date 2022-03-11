import React from 'react';
import Search from './Search.jsx';
import movies from '../data/movieData.js';
import MovieList from './MovieList.jsx';
import UserMovies from './UserMovies.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allMovies: movies
    }

    this.moviesAdded = [];

    this.filterMovies = this.filterMovies.bind(this); //???
    this.showAddedMovies = this.showAddedMovies.bind(this);
  }

  filterMovies(value) {
    let filteredMovies = this.state.allMovies.filter((movie, index) => (
      movie.title.toLowerCase().includes(value.toLowerCase()) // why does a ; here affect the whole thing?
    ));
    this.setState( {allMovies: filteredMovies} )
  }

  showAddedMovies(val) {
    // let moviesAdded = [];
    let newMovie = {};
    newMovie['title'] = val;
    this.moviesAdded.push(newMovie);
    this.setState( {allMovies: this.moviesAdded} )
  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <UserMovies a={this.showAddedMovies}/>
        <Search searchMovies={this.filterMovies}/>
        {/* //movies is a key to Movielist props to take in, this.state.allMovies is the data past in */}
        <MovieList movies={this.state.allMovies}/>
      </div>
    )
  }
};


//================================================



// // var movies = [
// //   {title: 'Mean Girls'},
// //   {title: 'Hackers'},
// //   {title: 'The Grey'},
// //   {title: 'Sunshine'},
// //   {title: 'Ex Machina'},
// // ];

// //grandchild?
// var Item = (props) => (
//   <div>
//     {/* {console.log('this is props ', props)} */}
//     <h3>{props.movie.title}</h3>
//   </div>
// )

// var MovieList = (props) => (
//   // can only return one thing so all needs to be inside of <div>
//   <div>
//     <ul className='movieBox'>
//       {props.allMovies.map((movie, index) => <Item key={index} movie={movie}/>)}
//     </ul>
//   </div>
// )


// //--------------------------------------------------------------------
// //create App class:
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     //set a state to empty string ready for change
//     this.state = {value: ''};

//     //what's with all this bindings?
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     //what's this target thing?
//     this.setState({value: event.target.value});
//   }

//   //after user submit, if value now === any value in movies:
//   // if (movies.title.inclueds(this.state.value)) {

//   // }

//   handleSubmit(event) {
//     //dummy action: alert some line
//     // alert('hi ' + this.state.value);
//     event.preventDefault();
//     //conditional statement to get matching element? and make changes to MovieList to make it show

//   }

//   render(){
//     // <li>{this.props.movie}</li>
//     return (
//       <div>
//         <h1>Movie List</h1>
//         <Search handleInputSubmit={this.handleSubmit} handleInputChange={this.handleChange}/>
//         <MovieList allMovies={movies}/>
//       </div>
//     )
//   }
// }


//===========================



export default App;