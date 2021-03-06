// react library
import React, { Component } from 'react';

// component
import ShowCard from './ShowCard';

// pre-loaded data
import preload from '../data';

class Search extends Component {
  state = { searchTerm: ''}

  handleSearchTermChange = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  render() {
    return (
      <div className='search'>
        <header>
          <h1>svideo!!!</h1>
          <input
            onChange={this.handleSearchTermChange}
            value={this.state.searchTerm}
            type='text'
            placeholder='Search'
          />
        </header>
        <div>
          {preload.shows
            .filter((show) => `${show.title} ${show.description}`.toUpperCase()
              .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map((show) =>
            <ShowCard {...show} key={show.imdbID} />
          )}
        </div>
      </div>
    )
  }
}

export default Search;


{/*<pre><code>{JSON.stringify(preload, null, 4)}</code></pre>*/}
