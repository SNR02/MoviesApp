import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addMovieToRecent } from '../features/userSlice';

const MoviePage = () => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${import.meta.env.VITE_API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
        if (currentUser) {
          dispatch(addMovieToRecent({ Poster: data.Poster, Title: data.Title, Year: data.Year, imdbID: data.imdbID }));
        }
      });
  }, [imdbID, currentUser, dispatch]);

  if (!movie) return <p>Loading...</p>;

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-full mx-auto flex flex-wrap items-center justify-center">
          <img src={movie.Poster} alt={movie.Title} className="md:w-72 w-full object-cover shadow-lg rounded" />
          <div className="lg:w-3/5 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-4xl font-bold">{movie.Title}</h1>
            <p className="text-gray-600 mt-1">{movie.Year} • {movie.Genre} • {movie.Language}</p>
            <p className="text-lg text-gray-700 my-6">{movie.Plot}</p>
            <div className="space-y-2">
              <p><span className="font-semibold">Director:</span> {movie.Director}</p>
              <p><span className="font-semibold">Actors:</span> {movie.Actors}</p>
              <p><span className="font-semibold">IMDb Rating:</span> {movie.imdbRating} ({movie.imdbVotes} votes)</p>
            </div>
            <div className="flex items-center mt-10">
              <a
                href={`https://www.imdb.com/title/${movie.imdbID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
              >
                View on IMDb
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoviePage;
