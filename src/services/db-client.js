import Dexie from 'dexie';

const DB_NAME = 'AllYourAlbums';
const db = new Dexie(DB_NAME);
const ALBUMS_TABLE = 'albums';

db.version(1).stores({ [ALBUMS_TABLE]: '&mbid,title,artist,type,year' });

function fetchAlbums() {
    return db.table(ALBUMS_TABLE).toArray();
}

function addAlbum(album) {
    return db.table(ALBUMS_TABLE)
        .add(album);
}

function removeAlbum(album) {
    return db.table(ALBUMS_TABLE)
        .delete(album.mbid);
}

export default {
    fetchAlbums,
    addAlbum,
    removeAlbum
};