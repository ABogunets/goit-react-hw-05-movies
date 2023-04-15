import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Loader } from 'components/Loader/Loader';
import { fetchMovies } from 'services/pics-api';
import { MoviesList } from '../components/MovieList/MoviesList';
import { Error } from 'components/Error.styled';

const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const CATEGORY = 'search/movie';
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchQuery) {
      //first render, fetch is not performed
      return;
    }
    setIsLoading(true);
    const getMovies = async () => {
      try {
        const { results } = await fetchMovies(CATEGORY, searchQuery);
        setData(results);
        if (results.length === 0) {
          toast.info(`Sorry, no results on query "${searchQuery}"`);
        }
      } catch (err) {
        console.log(err.message);
        setError('Sorry, the resource you requested could not be found.');
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
      {error && <Error>{error}</Error>}
      {data && <MoviesList data={data} />}
    </main>
  );
};

export default Movies;
