import React, { Component } from 'react';

class SearchForm extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        let term = e.target['search-term'].value;
        this.props.onSearch(term)
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input name="search-term" placeholder="Search albums" />
                <input type="submit" value="Search" />
            </form>
        );
    }
}

export default SearchForm;