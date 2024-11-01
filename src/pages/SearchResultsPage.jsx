import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MovieImagePlaceholder from '../assets/placeholder.png'

const SearchResults = () => {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=${query}&apikey=${import.meta.env.VITE_API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setMovies([]);
        }
      });
  }, [query]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Search Results for "{query}"</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            onClick={() => navigate(`/movie/${movie.imdbID}`)}
            className="cursor-pointer bg-gray-100 rounded p-2 shadow-md flex flex-col items-center"
          >
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : MovieImagePlaceholder}
              alt={movie.Title}
              className="mb-2"
            />
            <p className="text-sm font-semibold text-center">{movie.Title}</p>
            <p className="text-xs text-gray-500">{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
