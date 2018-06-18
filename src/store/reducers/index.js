import { LOAD_SAVED_ALBUMS, SEARCH_ALBUMS_BY_TITLE, SAVE_ALBUM, REMOVE_ALBUM } from "../actions/types";

export default function (state, action) {
    switch (action.type) {
        case SEARCH_ALBUMS_BY_TITLE:
            return {
                ...state,
                searchResults: action.albums.map(album => {
                    let filtered = (state.savedAlbums.filter(savedAlbum => savedAlbum.mbid === album.mbid));
                    if (filtered.length > 0) {
                        return {...album, isSaved: true};
                    }

                    return album;
                }),
                searchTerm: action.term
            };
        case LOAD_SAVED_ALBUMS:
            return {
                ...state,
                savedAlbums: action.albums
            };
        case SAVE_ALBUM:
            return {
                ...state,
                savedAlbums: [...state.savedAlbums, action.album],
                searchResults: state.searchResults.map(album => album.mbid === action.album.mbid
                    ? {...album, isSaved: true}
                    : album)
            };
        case REMOVE_ALBUM:
            return {
                ...state,
                savedAlbums: state.savedAlbums.filter(album => album.mbid !== action.album.mbid),
                searchResults: state.searchResults.map(album => album.mbid === action.album.mbid
                    ? {...album, isSaved: false}
                    : album)
            };
        default:
            return state;
    }
}