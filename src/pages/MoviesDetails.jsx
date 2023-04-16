import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from 'services/pics-api';
import { Loader } from 'components/Loader/Loader';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { List, AddInformation, LinkBack, Link } from './MoviesDetails.styled';
import { Error } from 'components/Error.styled';
import { useLocation } from 'react-router-dom';

const MoviesDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState();
  const { id } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? `/movies`;

  const CATEGORY = `movie/${id}`;
  const searchQuery = '';

  useEffect(() => {
    setIsLoading(true);

    const getMovies = async () => {
      try {
        const data = await fetchMovies(CATEGORY, searchQuery);
        setData(data);
      } catch (err) {
        console.log(err.message);
        setError('Sorry, the resource you requested could not be found.');
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, [CATEGORY]);

  return (
    <main>
      {isLoading && <Loader />}
      <LinkBack to={backLinkHref}>Go back</LinkBack>
      {error && <Error>{error}</Error>}
      {data && <MovieCard data={data} />}
      <AddInformation>
        <h4>Additional information</h4>
        <List>
          <li>
            <Link to="cast" state={{ from: backLinkHref }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: backLinkHref }}>
              Review
            </Link>
          </li>
        </List>
      </AddInformation>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MoviesDetails;
