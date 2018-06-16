import React, { Component } from 'react';
import './App.css';
import { searchReleasesByName } from './utils/mb-api';

import AlbumList from './components/AlbumList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      releases: []
    };
  }

  componentDidMount() {
    searchReleasesByName('Lithium').then(releases => {
        this.setState({
            releases: releases
        });
      });
  }

  render() {
    return (
      <div className="App">
        <AlbumList releases={this.state.releases} />
      </div>
    );
  }
}

export default App;
