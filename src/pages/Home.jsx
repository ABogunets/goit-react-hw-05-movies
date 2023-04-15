import { useState, useEffect } from 'react';
import { MoviesList } from '../components/MovieList/MoviesList';
import { fetchMovies } from 'services/pics-api';
import { Loader } from 'components/Loader/Loader';
import { Error } from 'components/Error.styled';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const CATEGORY = 'trending/all/day';
  const searchQuery = '';

  useEffect(() => {
    setIsLoading(true);
    const getMovies = async () => {
      try {
        const { results } = await fetchMovies(CATEGORY, searchQuery);
        setData(results);
      } catch (err) {
        console.log(err.message);
        setError('Sorry, the resource you requested could not be found.');
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, []);

  return (
    <main>
      <h1>Tranding today</h1>
      {isLoading && <Loader />}
      {error && <Error>{error}</Error>}
      {data && <MoviesList data={data} />}
    </main>
  );
};

export default Home;
