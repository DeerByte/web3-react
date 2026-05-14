const BASE_URL = "https://web3-supanode.onrender.com/api";

// Checks promise response. If resp.ok, return resp.json()
function processResponse(resp) {
  if (!resp.ok) {
    throw new Error("API Error! HTTP error code: " + resp.status);
  } else {
    return resp.json();
  }
}

async function fetchArtists() {
  const artists = fetch(BASE_URL + "/artists")
    .then((resp) => processResponse(resp))
    .then((respJson) => respJson.data)
    .catch((e) => console.error(e));

  return artists;
}

async function fetchArtistById(id) {
  const artist = fetch(BASE_URL + "/artists/" + id)
    .then((resp) => processResponse(resp))
    .then((respJson) => respJson.data)
    .catch((e) => console.error(e));

  return artist;
}

async function fetchGenres() {
  const genres = fetch(BASE_URL + "/genres")
    .then((resp) => processResponse(resp))
    .then((respJson) => respJson.data)
    .catch((e) => console.error(e));

  return genres;
}

async function fetchGenreById(id) {
  const genres = fetch(BASE_URL + "/genres/" + id)
    .then((resp) => processResponse(resp))
    .then((respJson) => respJson.data)
    .catch((e) => console.error(e));
  return genres;
}

async function fetchSongs() {
  const songs = fetch(BASE_URL + "/songs")
    .then((resp) => processResponse(resp))
    .then((respJson) => respJson.data)
    .catch((e) => console.error(e));

  return songs;
}

async function fetchSongById(id) {
  const song = fetch(BASE_URL + "/songs" + id)
    .then((resp) => processResponse(resp))
    .then((respJson) => respJson.data)
    .catch((e) => console.error(e));

  return song;
}

async function fetchSongsByArtistId(artistId) {
  const songs = fetch(BASE_URL + "/songs/artist/" + artistId)
    .then((resp) => processResponse(resp))
    .then((respJson) => respJson.data)
    .catch((e) => console.error(e));

  return songs;
}

async function fetchSongsByGenreId(genreId) {
  const songs = fetch(BASE_URL + "/songs/genres/" + genreId)
    .then((resp) => processResponse(resp))
    .then((respJson) => respJson.data)
    .catch((e) => console.error(e));

  return songs;
}

async function fetchPlaylists() {
  const playlists = fetch(BASE_URL + "/playlists")
    .then((resp) => processResponse(resp))
    .then((respJson) => respJson.data)
    .catch((e) => console.error(e));

  return playlists;
}

async function fetchPlaylistById(playlistId) {
  const playlist = fetch(BASE_URL + "/playlists/" + playlistId)
    .then((resp) => processResponse(resp))
    .then((respJson) => respJson.data)
    .catch((e) => console.error(e));

  return playlist;
}

async function createPlaylist(name) {
  const response = fetch(BASE_URL + "/playlist/" + name, {
    method: "POST"
  })
    .then((resp) => processResponse(resp))
    .catch((e) => console.error(e));

  return response.status == 201;
}

async function renamePlaylist(playlistId, newName) {
  const response = fetch(`${BASE_URL}/playlist/${playlistId}/${newName}`, {
    method: "PUT"
  })
    .then((resp) => processResponse(resp))
    .catch((e) => console.error(e));

  return response.status == 204;
}

async function deletePlaylist(playlistId) {
  const response = fetch(`${BASE_URL}/playlist/${playlistId}`, {
    method: "DELETE"
  })
    .then((resp) => processResponse(resp))
    .catch((e) => console.error(e));

  return response.status == 204;
}

async function addSongToPlaylist(playlistId, songId) {
  const response = fetch(
    `${BASE_URL}/playlist/add-song/${playlistId}/${songId}`,
    {
      method: "POST"
    }
  )
    .then((resp) => processResponse(resp))
    .catch((e) => console.error(e));

  return response.status == 201;
}

// Remove song from playlist using playlists table id
async function removeSongFromPlaylist(playlistId, recordId) {
  const response = fetch(
    `${BASE_URL}/playlist/remove-song/${playlistId}/${recordId}`,
    {
      method: "DELETE"
    }
  )
    .then((resp) => processResponse(resp))
    .catch((e) => console.error(e));

  return response.status == 204;
}

export {
  fetchArtists,
  fetchArtistById,
  fetchSongsByArtistId,
  fetchGenres,
  fetchGenreById,
  fetchSongs,
  fetchSongById,
  fetchSongsByGenreId,
  fetchPlaylists,
  fetchPlaylistById,
  createPlaylist,
  renamePlaylist,
  deletePlaylist,
  addSongToPlaylist,
  removeSongFromPlaylist
};
