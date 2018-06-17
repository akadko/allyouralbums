import React, { Component } from 'react';
import Album from './Album';

export default class AlbumList extends Component {
    render() {
        return (
            <div>
                <ul>{this.props.releases.map((album) =>
                    <Album title={album.title} artist={album.artist} year={album.year} key={album.mbid} />
                )}</ul>
            </div>
        );
    }
}