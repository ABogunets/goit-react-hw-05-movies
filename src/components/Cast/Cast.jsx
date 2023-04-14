import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from 'services/pics-api';
import { Loader } from 'components/Loader/Loader';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { ImHome3 } from 'react-icons/im';
// import { List, AddInformation } from './Cast.styled';

const Cast = () => {
  const { id } = useParams();
  const CATEGORY = `movie/${id}/credits`;
  const searchQuery = '';
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState();

  useEffect(() => {
    setIsLoading(true);

    const getMovies = async () => {
      try {
        const data = await fetchMovies(CATEGORY, searchQuery);
        setData(data);
        console.log('data', data);

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
  }, [CATEGORY]);

  return (
    <div>
      {isLoading && <Loader />}
      {data && <h3>This is CAST</h3>}
    </div>
  );
};

export default Cast;
