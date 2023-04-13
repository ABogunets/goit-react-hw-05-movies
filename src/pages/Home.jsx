// import { Link, Outlet } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { MoviesList } from '../components/MoviesList';
// import { getMovies } from '../fakeAPI';
import { fetchMovies } from 'services/pics-api';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const CATEGORY = 'trending/all/day';
  const searchQuery = '';
  const [movieSet, setMovieSet] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const getMovies = async () => {
      try {
        const { results } = await fetchMovies(CATEGORY, searchQuery);
        console.log('results', results);
        setMovieSet(results);
        // const { hits, totalHits } = await fetchMovies(searchQuery, page);
        // setMovieSet(prevMovieSet =>
        //   page === 1 ? hits : [...prevPicsSet, ...hits]
        // );
        // setTotalHits(totalHits);
        // if (hits.length === 0 && page === 1) {
        //   toast.info(`Sorry, no pics on query "${searchQuery}"`);
        // }
      } catch (err) {
        console.log(err.message);
        // setError('Oops, something went wrong...');
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
      <MoviesList movies={movieSet} />
    </main>
  );
};

export default Home;
