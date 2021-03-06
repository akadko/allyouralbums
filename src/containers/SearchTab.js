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
                {this.props.albums.length === 0
                    ? <div className="empty-library-message">Type something and click 'Search'.</div>
                    : <AlbumList releases={this.props.albums}/>
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    albums: state.searchResults,
    searchAlbums: searchAlbums
});

export default connect(mapStateToProps, { searchAlbums })(SearchTab);