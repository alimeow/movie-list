import React from 'react';

class MovieListEntry extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // bClicked: false,   //since no more state ..  see if really need class when have time.
    }

    this.handleClick = this.handleClick.bind(this)
  }

  //should I pass in something from App and change state
  handleClick() {
    this.props.alterWatch(this.props.movie) //pass movieObj to App on click
  }

  render() {

    var bStyle = {
      backgroundColor: this.props.movie.watched ? 'green' : 'grey' //
    }

    return (
      <div className='movieTitle'>
        {this.props.movie.title}
        {/* visualize movie watched state */}
        <p>{this.props.movie.watched.toString()}</p>
        <button
        className='watchButton'
        style={bStyle}
        onClick={this.handleClick}
        >Watched</button>
      </div>
    )
  }
}


export default MovieListEntry;
