import React from 'react';

class UserMovies extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      movieAdded: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({movieAdded: e.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    // this.props.moviesAdded.push(this.state.movieAdded)
    this.props.inputMovie(this.state.movieAdded)
  }

  //toggle watched state of every movie


  render() {
    return (
      <div id='userMovie'>
        <form onSubmit={this.handleSubmit}>
          {/* what is value=this.state.value */}
          <input placeholder='Add movie title here' type='text' value={this.state.movieAdded} onChange={this.handleChange}>
          </input>
          <input id='addBotton' type='submit' value='Add'></input>
        </form>
      </div>
    )
  }
}

export default UserMovies;