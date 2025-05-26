import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Calendar, Clock, Play } from 'lucide-react';

interface Movie {
  id: number;
  title: string;
  poster: string;
  rating: number;
  year: number;
  duration: string;
  genre: string;
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="block">
      <div className="group relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/20">
        <div className="relative overflow-hidden">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110">
              <Play className="h-6 w-6" />
            </button>
          </div>
          <div className="absolute top-4 right-4 bg-black/80 text-yellow-400 px-2 py-1 rounded-lg flex items-center">
            <Star className="h-4 w-4 mr-1 fill-current" />
            <span className="text-sm font-semibold">{movie.rating}</span>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">{movie.title}</h3>
          <div className="space-y-2">
            <div className="flex items-center text-gray-300 text-sm">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{movie.year}</span>
            </div>
            <div className="flex items-center text-gray-300 text-sm">
              <Clock className="h-4 w-4 mr-2" />
              <span>{movie.duration}</span>
            </div>
            <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
              {movie.genre}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
