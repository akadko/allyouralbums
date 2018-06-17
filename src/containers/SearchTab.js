import React, { Component } from 'react';

import SearchForm from '../components/SearchForm';
import AlbumList from '../components/AlbumList';

import { connect } from 'react-redux';
import { searchAlbums } from "../store/actions/albums-actions";

class SearchTab extends Component {
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
    }

    search(e) {
        e.preventDefault();
        let term = e.target['search-term'].value;
        this.props.searchAlbums(term);
    }

    render() {
        return (
            <div>
                <SearchForm onSearch={this.search} />
                <AlbumList releases={this.props.albums} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    albums: state.albums.searchResults,
    searchAlbums: searchAlbums
});

export default connect(mapStateToProps, { searchAlbums })(SearchTab);