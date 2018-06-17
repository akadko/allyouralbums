import React, { Component } from 'react';

class Album extends Component {
    render() {
        return (
            <div className="Album">
                <p className="Album-Title">{this.props.title}</p>
                <p className="Album-Artist">{this.props.artist}</p>
                <p className="Album-Year">{this.props.year}</p>
            </div>
        );
    }
}

export default Album;