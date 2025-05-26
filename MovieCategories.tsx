
import React from 'react';
import { Flame, Heart, Zap, Smile, Drama, Rocket } from 'lucide-react';

const categories = [
  {
    name: "Trending",
    icon: Flame,
    count: 245,
    color: "from-red-500 to-orange-500"
  },
  {
    name: "Romance",
    icon: Heart,
    count: 128,
    color: "from-pink-500 to-rose-500"
  },
  {
    name: "Action",
    icon: Zap,
    count: 189,
    color: "from-yellow-500 to-amber-500"
  },
  {
    name: "Comedy",
    icon: Smile,
    count: 156,
    color: "from-green-500 to-emerald-500"
  },
  {
    name: "Drama",
    icon: Drama,
    count: 203,
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Sci-Fi",
    icon: Rocket,
    count: 87,
    color: "from-purple-500 to-violet-500"
  }
];

const MovieCategories = () => {
  return (
    <div className="py-16 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Browse by Category</h2>
        <p className="text-gray-300 text-lg">Explore movies by your favorite genres</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <div
              key={category.name}
              className="group cursor-pointer bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/20 text-center"
            >
              <div className={`mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                <IconComponent className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-1">{category.name}</h3>
              <p className="text-gray-400 text-sm">{category.count} movies</p>
            </div>
          );
        })}
      </div>
      
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-3xl font-bold text-white mb-4">Get Personalized Recommendations</h3>
          <p className="text-gray-300 text-lg mb-6">Rate movies you've watched to get better suggestions</p>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            Start Rating Movies
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCategories;
