import { useState, useEffect } from 'react';

import { Searchbar } from 'components/Searchbar/Searchbar';
import { Loader } from 'components/Loader/Loader';
import { fetchMovies } from 'services/pics-api';
import { MoviesList } from '../components/MoviesList';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Movies = () => {
  const CATEGORY = 'search/movie';
  const [movieSet, setMovieSet] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [searchQuery, setSearchQuery] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  // console.log('searchParams :>> ', searchParams.get('query'));

  // setSearchQuery(searchParams.get('query'));
  const searchQuery = searchParams.get('query') ?? '';
  console.log('searchQuery :>> ', searchQuery);
  useEffect(() => {
    if (!searchQuery) {
      //first render, fetch is not performed
      return;
    }
    setIsLoading(true);

    const getMovies = async () => {
      try {
        const { results } = await fetchMovies(CATEGORY, searchQuery);
        setMovieSet(results);
        if (results.length === 0) {
          toast.info(`Sorry, no results on query "${searchQuery}"`);
        }
      } catch (err) {
        console.log(err.message);
        // setError('Oops, something went wrong...');
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, [searchQuery]);

  return (
    <main>
      <Searchbar setSearchParams={setSearchParams} />
      {isLoading && <Loader />}
      <MoviesList movies={movieSet} />
    </main>
  );
};

export default Movies;
