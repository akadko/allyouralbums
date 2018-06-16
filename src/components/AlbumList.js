import React, { Component } from 'react';
import Album from './Album';

export default class AlbumList extends Component {
    render() {
        let albumElements = this.props.releases.map((album, index, albumList) => 
            <Album title={album.title} artist={album.artist} year={album.year} key={album.mbid} />
        );

        return (
            <div>
                <ul>{albumElements}</ul>
            </div>
        );
    }
}