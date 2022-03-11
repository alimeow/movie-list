import React from 'react';
// import App from './App.jsx';  //no need...

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      term: ''
    }
    // or we can bind it here in constructor
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    // let {value} = event.target;  //destructuring example
    // event.persist()
    // console.log(event.target)
    //asycronis function. keywork will be lost by the time funciton is lost because it's not syncronis
    this.setState( {term: event.target.value} )
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.searchMovies(this.state.term);
  }

  render() {
    return (
      <div className='searchForm'>
        <form onSubmit={this.handleSubmit}>
          <input placeholder='Search...' type='text' value={this.state.value} onChange={this.handleChange}>
            {/* we can bind here: onChange={this.handleChange.bind(this)}
            AKA bind the property to the function here */}
          </input>
          <input type='submit' value='Go!' />
        </form>
      </div>
    )
  }

}


export default Search;



// var Search = (props) => (
//   // props.giveItAName <- this name has to be the same in App when we instantiate
//   <form className='searchForm' onSubmit={props.handleInputSubmit} onChange={props.handleInputChange}>
//     <label>
//       {/* what's name='name' */}
//       <input id='searchBox' type='text' placeholder='search movie' name='name' />
//     </label>
//     <input id='searchBotton' type='submit' value='Go!' />
//   </form>
// )

//Now we have a problem:
//once you enter something and the result becomes empty, when you
//search correctly again it won't show anything.
//might need some change on the handleChange function?

