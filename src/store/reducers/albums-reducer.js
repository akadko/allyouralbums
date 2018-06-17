import { SEARCH_ALBUMS_BY_TITLE, LOAD_ALBUMS_FROM_LIBRARY } from "../actions/types";

const initialState = {
    searchResults: [],
    albumsFromLibrary: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_ALBUMS_BY_TITLE:
            return {
                ...state,
                searchResults: action.payload
            };
        case LOAD_ALBUMS_FROM_LIBRARY:
        default:
            return state;
    }
}