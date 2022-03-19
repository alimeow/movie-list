import React from 'react';

// const MovieListEntry = ({movie}) => {
//   return (
//     <div className='movieTitle'>
//       {movie.title}
//       <button
//       className='watchButton'
//       onClick = {this.handleClick}
//       >Not Yet Watched</button>
//     </div>
//   )
// }

class MovieListEntry extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // bClicked: false,
      watchedState: false  //if we add state here it won't change that in movies

    }

    this.handleClick = this.handleClick.bind(this)
  }

  //should I pass in something from App and change state
  handleClick() {
    //link to App and change movie watch state:
    // this.setState({this.props.movie.watched: true})
    //change style
    // this.setState({
    //   bClicked: !this.state.bClicked
    // })

    console.log(this.props.movie.watched)
    //say if change clicked state, maybe change the watched property of every movie
    //use two seperate setState calls here or two para in one setstate?
    // this.setState({
    //   watchedState: !this.state.watchedState
    // })
    // console.log(this.state.watchedState + '\n---------------')
    // this.props.alterWatch(this.state.watchedState)
    //since props were passing down from layers indirectly, we can alter watched state directly
    this.props.alterWatch(this.props.movie) //link to App
  }


  render() {

    var bStyle = {
      backgroundColor: this.props.movie.watched ? 'green' : 'grey' //
    }

    return (

      <div className='movieTitle'>
        {/* why is it this.props not this.movie ??? */}
        {this.props.movie.title}
        {/* visualize movie watched state */}
        <p>{this.props.movie.watched.toString()}</p>
        <button
        className='watchButton'
        //why is style in render and not outside and this.bStyle wouldn't work?
        style={bStyle}
        onClick={this.handleClick}
        >Watched</button>
      </div>
    )
  }

}


export default MovieListEntry;
