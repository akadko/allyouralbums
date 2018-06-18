const BASE_URL = 'https://musicbrainz.org/ws/2';

function searchReleasesByName(name) {
    name = escapeQuery(name);

    return sendSearchRequest('release', `release:${name}`)
        .then(response => response.json())
        .then(json => json.releases.map(releaseData => buildRelease(releaseData)));
}

function escapeQuery(query) {
    let symbolsToEscape = ['+', '-', '&&', '||', '!', '(', ')', '{', '}',
                            '[', ']', '^', '"', '~', '*', '?', ':', '\\', '/'];

    // @TODO: Implement real escaping
    return query;
}

function sendSearchRequest(resource, query) {
    let url = `${BASE_URL}/${resource}/?query=${query}&fmt=json`;

    return fetch(url);
}

function buildRelease(mbReleaseData) {
    let mbid = mbReleaseData.id;
    let title = mbReleaseData.title;
    let artist = mbReleaseData['artist-credit'].reduce((artistString, item) => {
        let artistData = item.artist;
        let joinphrase = item.joinphrase || '';
        let nextArtistName = artistData.name;

        return artistString + nextArtistName + joinphrase;
    }, '');
    let type = mbReleaseData['release-group']['primary-type'];
    let year = mbReleaseData.date;

    return {mbid, title, artist, type, year, isSaved: false};
}

export default {
    searchReleasesByName
};