import Header from "@/components/Header.jsx";
import hero from "@/assets/hero.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <div className="relative">
        <img
          className="w-full h-72 object-cover opacity-60"
          src={hero}
          alt="Music hero"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-white text-4xl font-bold tracking-tight drop-shadow-lg">
            Discover Your Sound
          </h1>
          <p className="text-gray-300 text-lg mt-2 drop-shadow">
            Browse artists, genres, and songs — build your perfect playlist.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
