import React, { Component } from 'react';
import SearchResult from './SearchResult.jsx';
import data from '../data.js';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {results: []};

    this.onChangeEvent = this.onChangeEvent.bind(this);
  }

  onChangeEvent(event) {
    if (event.target.value === '') {
      this.setState({results: []});
    } else {
      this.setState({
        results: data.cards.filter((currentCardData) => {
          return currentCardData.name.match(event.target.value);
        })
      });
    }

    console.log(this.state.results);
  }

  render() {
    return (
      <div className="search">
        <form>
          <label htmlFor="search">
            Enter Card Name: For Example, Adorable Kitten
          </label>
          <input id="search" type="text" placeholder={'Enter Card Name'} onChange={this.onChangeEvent} />
        </form>
        <div>
          <p>{this.state.results.length} found</p>
        </div>
        <div>
          {this.state.results.map((currentResult, index) => {
            return <SearchResult key={index} info={currentResult} />
          })}
        </div>
      </div>
    );
  }
}

export default Search;
