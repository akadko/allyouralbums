import React, { Component } from 'react';

class Album extends Component {
    constructor(props) {
        super(props);

        this.onSaveClick = this.onSaveClick.bind(this);
        this.onRemoveClick = this.onRemoveClick.bind(this);
    }

    onSaveClick(e) {
        e.preventDefault();
        this.props.onSave(this.props.album);
    }

    onRemoveClick(e) {
        e.preventDefault();
        this.props.onRemove(this.props.album);
    }

    render() {
        const album = this.props.album;

        return (
            <div className="card Album">
                <div className="card-body">
                    <h5 className="Album-Title">{album.title}</h5>
                    <p className="Album-Artist">{album.artist}</p>
                    <p className="Album-Year"><i>{album.year}</i></p>
                    {album.isSaved
                        ? <button onClick={this.onRemoveClick}>Remove</button>
                        : <button onClick={this.onSaveClick}>Save</button>}
                </div>
            </div>
        );
    }
}

export default Album;