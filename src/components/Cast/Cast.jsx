import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from 'services/pics-api';
import { Loader } from 'components/Loader/Loader';
import { List, Image } from './Cast.styled';
import noImage from 'images/noImage.png';
import { Error } from 'components/Error.styled';

const Cast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState();
  const { id } = useParams();

  const CATEGORY = `movie/${id}/credits`;
  const searchQuery = '';

  useEffect(() => {
    setIsLoading(true);

    const getMovies = async () => {
      try {
        const { cast } = await fetchMovies(CATEGORY, searchQuery);
        setData(cast);
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
    <div>
      {isLoading && <Loader />}
      {error && <Error>{error}</Error>}
      {data && (
        <List>
          {data.map(item => (
            <li key={item.id}>
              <Image
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                    : noImage
                }
                alt={item.name}
              />
              <p>{item.name} </p>
              <p>{`Character: ${item.character}`}</p>
            </li>
          ))}
        </List>
      )}
    </div>
  );
};

export default Cast;
