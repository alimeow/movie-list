import React from 'react';

class WatchedMovies extends React.Component {
  constructor(props) {
    super(props)

    //how do i add button styles here?
    this.state = {
      // watchedClicked: false,
      // toWatchedClicked: true
      buttonClicked: false
    }
    this.handleClickOnWatched = this.handleClickOnWatched.bind(this);
    this.handleClickOnToWatch = this.handleClickOnToWatch.bind(this);
  }

  handleClickOnWatched() {

    if (!this.state.buttonClicked) {    //forgot why I added conditional
      this.setState({buttonClicked: !this.state.buttonClicked})
      this.props.toggleState(true)
    }
  }

  handleClickOnToWatch() {

    if (this.state.buttonClicked) {
      this.setState({buttonClicked: !this.state.buttonClicked})
      this.props.toggleState(false)
    }
  }


  render() {

    let toWatchStyle = {
      // backgroundColor: this.state.toWatchedClicked ? 'green' : 'white'
      backgroundColor: this.state.buttonClicked ? 'white' : 'green'
    };
    let watchedStyle = {
      // backgroundColor: this.state.watchedClicked ? 'green' : 'white'
      backgroundColor: this.state.buttonClicked ? 'green' : 'white'
    };

    return (
      <div className='watchedMovies'>
        <button
        style={watchedStyle}
        // onClick={() => this.props.toggleState(true)}
        onClick={this.handleClickOnWatched}
        >Watched</button>
        <button
        // onClick={() => this.props.toggleState(false)}
        onClick={this.handleClickOnToWatch}
        style={toWatchStyle}
        >To Watch</button>
      </div>
    )
  }
}

export default WatchedMovies;
