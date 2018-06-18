import React, { Component } from 'react';
import Album from './Album';
import { saveAlbum, removeAlbum } from "../store/actions/albums-actions";

import { connect } from 'react-redux';

class AlbumList extends Component {
    render() {
        return (
            <div>
                <div className="row">{this.props.releases.map((album) =>
                    <div className="col-3 my-1">
                        <Album key={album.mbid} album={album}
                               onSave={this.props.saveAlbum} onRemove={this.props.removeAlbum} />
                    </div>
                )}</div>
            </div>
        );
    }
}

const mapStateToProps = () => ({
    saveAlbum: saveAlbum,
    removeAlbum: removeAlbum
});

export default connect(mapStateToProps, { saveAlbum, removeAlbum })(AlbumList);