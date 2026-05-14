import Header from "../components/Header";
import { useEffect, useState } from "react";
import { fetchArtists } from "../lib/api";
import Artist from "../components/Artist";

const Artists = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetchArtists().then((artists) => setArtists(artists));
  }, []);

  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <div className="px-6 py-8">
        <h1 className="text-white text-2xl font-bold tracking-tight mb-6">Artists</h1>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-3">
          {artists.map((artist, indx) => (
            <Artist
              key={indx}
              id={artist.artist_id}
              name={artist.artist_name}
              img={artist.artist_image_url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artists;
