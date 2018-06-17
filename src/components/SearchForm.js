import React, { Component } from 'react';

class SearchForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSearch}>
                <input name="search-term" placeholder="Search albums" />
                <input type="submit" value="Search" />
            </form>
        );
    }
}

export default SearchForm;