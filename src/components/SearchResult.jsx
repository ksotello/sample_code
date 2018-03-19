import React, { Component } from 'react';

export default class SearchResult extends Component {
  render() {
    const { info } = this.props;

    return (
        <div className='result'>
          <img src={info.imageUrl} />
          <div className='result__info'>
            <p>Card Name: {info.name}</p>
            <p>Artist Name: {info.artist}</p>
            <p>Mana Cost: {info.manaCost}</p>
            <p>Original Text: {info.originalText}</p>
            <p>Rarity: {info.rarity}</p>
            <p>Type: {info.type}</p>
          </div>
        </div>
    );
  }
}
