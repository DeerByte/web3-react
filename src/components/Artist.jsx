import { Link } from "react-router";

const Artist = (props) => {
  return (
    <Link to={`/artists/${props.id}`}>
      <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-indigo-500 hover:scale-105 transition-all duration-200 cursor-pointer">
        <img
          src={props.img}
          alt={props.name}
          className="w-full h-24 object-contain bg-gray-800 p-1"
        />
        <div className="p-3">
          <div className="text-white font-semibold text-sm truncate">{props.name}</div>
          <div className="text-gray-400 text-xs mt-1">{props.type}</div>
        </div>
      </div>
    </Link>
  );
};

export default Artist;
