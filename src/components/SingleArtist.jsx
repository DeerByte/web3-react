import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "./Header";
import { fetchArtistById, fetchSongsByArtistId } from "@/lib/api";

const SingleArtist = () => {
  const id = useParams();

  const [songs, setSongs] = useState([]);
  const [artist, setArtist] = useState();

  useEffect(() => {
    fetchArtistById(id).then((data) => setArtist(data));
  });

  useEffect(() => {
    fetchSongsByArtistId(id).then((data) => setSongs(data));
  });

  return (
    <div>
      <Header />
      <div>
        <div>{/* <img src={} alt="" /> */}</div>
        <div>// song info here.</div>
      </div>
    </div>
  );
};

export default SingleArtist;
