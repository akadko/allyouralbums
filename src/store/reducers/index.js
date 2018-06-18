import {LOAD_ALBUMS_FROM_LIBRARY, SEARCH_ALBUMS_BY_TITLE} from "../actions/types";

export default function (state, action) {
    switch (action.type) {
        case SEARCH_ALBUMS_BY_TITLE:
            return {
                ...state,
                searchResults: action.results,
                searchTerm: action.term
            };
        case LOAD_ALBUMS_FROM_LIBRARY:
        default:
            return state;
    }
}