export function buildRelease(mbReleaseData) {
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