import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';

class App extends Component {
    render () {
      return (
          <Search />
      );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
