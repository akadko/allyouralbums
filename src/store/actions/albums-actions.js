import { SEARCH_ALBUMS_BY_TITLE, LOAD_SAVED_ALBUMS, SAVE_ALBUM, REMOVE_ALBUM } from "./types";
import MbClient from '../../services/mb-api-client';
import DBClient from '../../services/db-client';

export const searchAlbums = (term) => dispatch => {
    if (term) {
        MbClient.searchReleasesByName(term).then(releases =>
            dispatch({
                type: SEARCH_ALBUMS_BY_TITLE,
                albums: releases,
                term: term
            }));
    } else {
        dispatch({
            type: SEARCH_ALBUMS_BY_TITLE,
            albums: [],
            term: term
        });
    }
};

export const loadSavedAlbums = () => dispatch => {
    DBClient.fetchAlbums()
        .then(albums => albums.map(album => {return {...album, isSaved: true};}))
        .then(albums => dispatch({
            type: LOAD_SAVED_ALBUMS,
            albums
        }));
};

export const saveAlbum = (album) => dispatch => {
    DBClient.addAlbum(album)
        .then(albumId => dispatch({
            type: SAVE_ALBUM,
            album,
            id: albumId
        }))
};

export const removeAlbum = (album) => dispatch => {
    DBClient.removeAlbum(album).then(() => dispatch({
        type: REMOVE_ALBUM,
        album
    }));
};