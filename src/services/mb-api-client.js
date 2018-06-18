import { buildRelease } from './builders';

const BASE_URL = 'https://musicbrainz.org/ws/2';

function searchReleasesByName(name) {
    name = escapeQuery(name);

    return sendSearchRequest('release', `release:${name}`)
        .then(response => response.json())
        .then(json => json.releases.map(releaseData => buildRelease(releaseData)));
}

function escapeQuery(query) {
    // @TODO: Implement real escaping
    return query;
}

function sendSearchRequest(resource, query) {
    let url = `${BASE_URL}/${resource}/?query=${query}&fmt=json`;

    return fetch(url);
}

export default {
    searchReleasesByName
};