import { SEARCH_ALBUMS_BY_TITLE, LOAD_ALBUMS_FROM_LIBRARY } from "./types";
import MbClient from '../../services/mb-api-client';

export const searchAlbums = (term) => dispatch => {
    MbClient.searchReleasesByName(term).then(releases => {
        dispatch({
            type: SEARCH_ALBUMS_BY_TITLE,
            payload: releases
        })
    });
};