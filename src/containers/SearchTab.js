import React, { Component } from 'react';

import SearchForm from '../components/SearchForm';
import AlbumList from '../components/AlbumList';

import { connect } from 'react-redux';
import { searchAlbums } from "../store/actions/albums-actions";

class SearchTab extends Component {
    render() {
        return (
            <div>
                <SearchForm onSearch={this.props.searchAlbums} />
                <AlbumList releases={this.props.albums} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    albums: state.searchResults,
    searchAlbums: searchAlbums
});

export default connect(mapStateToProps, { searchAlbums })(SearchTab);