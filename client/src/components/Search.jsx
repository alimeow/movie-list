import React from 'react';
// import App from './App.jsx';  //no need...

var Search = (props) => (
  // props.giveItAName <- this name has to be the same in App when we instantiate
  <form className='searchForm' onSubmit={props.handleInputSubmit} onChange={props.handleInputChange}>
    <label>
      {/* what's name='name' */}
      <input id='searchBox' type='text' placeholder='search movie' name='name' />
    </label>
    <input id='searchBotton' type='submit' value='Go!' />
  </form>
)

export default Search;