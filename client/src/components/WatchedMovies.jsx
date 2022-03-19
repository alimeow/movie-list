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
    // alert('you clicked watched')
    // this.props.pickWatched(this.state.watchedClicked);
    // this.setState({watchedClicked: !this.state.watchedClicked})
    // this.setState({toWatchedClicked: !this.state.toWatchedClicked})
    if (!this.state.buttonClicked) {
      this.setState({buttonClicked: !this.state.buttonClicked})
    }
    this.props.pickWatched(this.state.buttonClicked)
  }

  handleClickOnToWatch() {
    // this.state.toWatchedClicked = !this.state.toWatchedClicked
    // why is this needed in the second case not first case
    // this.setState({toWatchedClicked: !this.state.toWatchedClicked})
    // this.props.pickUnwatched(this.state.toWatchedClicked);

    // this.setState({toWatchedClicked: !this.state.toWatchedClicked})
    // this.setState({watchedClicked: !this.state.watchedClicked})
    // this.props.pickUnwatched(this.state.toWatchedClicked)
    if (this.state.buttonClicked) {
      this.setState({buttonClicked: !this.state.buttonClicked})
    }
    this.props.pickUnwatched(this.state.buttonClicked)
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

    // let buttonStyle = {
    //   // backgroundColor: this.state.toWatchedClicked ? 'green' : 'white'
    //   backgroundColor: this.state.buttonClicked ? 'white' : 'green'
    // };

    return (
      <div className='watchedMovies'>
        <button
        style={watchedStyle}
        onClick={this.handleClickOnWatched}
        >Watched</button>
        <button
        onClick={this.handleClickOnToWatch}
        style={toWatchStyle}
        >To Watch</button>
      </div>
    )
  }
}

export default WatchedMovies;
