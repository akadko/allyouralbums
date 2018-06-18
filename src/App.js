import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import LibraryTab from './containers/LibraryTab';
import SearchTab from './containers/SearchTab';
import store from './store/store';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="container">
                    <Tabs>
                        <TabList className="nav nav-tabs">
                            <Tab className="nav-item">Library</Tab>
                            <Tab className="nav-item">Search</Tab>
                        </TabList>
                        <TabPanel>
                            <LibraryTab />
                        </TabPanel>
                        <TabPanel>
                            <SearchTab />
                        </TabPanel>
                    </Tabs>
                </div>
            </Provider>
        );
    }
}

export default App;
