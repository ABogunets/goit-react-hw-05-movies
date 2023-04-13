import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from 'services/pics-api';
import { Loader } from 'components/Loader/Loader';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { List } from './MoviesDetails.styled';

const MoviesDetails = () => {
  const { id } = useParams();
  const CATEGORY = `movie/${id}`;
  const searchQuery = '';
  const [isLoading, setIsLoading] = useState(false);
  // const [poster_path, setPoster_path] = useState([]);
  // const [title, setTitle] = useState([]);

  const [data, setData] = useState();

  useEffect(() => {
    setIsLoading(true);

    const getMovies = async () => {
      try {
        const data = await fetchMovies(CATEGORY, searchQuery);
        // console.log('results', results);
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
    <main>
      {isLoading && <Loader />}
      <MovieCard data={data} />
      <h4>Additional information</h4>
      <List>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Review</Link>
        </li>
      </List>
      <Outlet />
    </main>
  );
};

export default MoviesDetails;
