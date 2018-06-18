import React, { Component } from 'react';
import AlbumList from '../components/AlbumList';
import { connect } from 'react-redux';
import { loadSavedAlbums } from "../store/actions/albums-actions";

class LibraryTab extends Component {
    componentDidMount() {
        this.props.loadSavedAlbums();
    }

    render() {
        return (
            <div>
                {this.props.albums.length === 0
                    ? <div className="empty-library-message">Your Library is empty.</div>
                    : <AlbumList releases={this.props.albums}/>
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    albums: state.savedAlbums,
    loadSavedAlbums: loadSavedAlbums
});

export default connect(mapStateToProps, { loadSavedAlbums })(LibraryTab);