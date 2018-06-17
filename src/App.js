import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import SearchTab from './containers/SearchTab';
import store from './store/store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <SearchTab />
                </div>
            </Provider>
        );
    }
}

export default App;
