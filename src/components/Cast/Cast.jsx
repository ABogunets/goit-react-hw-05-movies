import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from 'services/pics-api';
import { Loader } from 'components/Loader/Loader';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { ImHome3 } from 'react-icons/im';
import { List, Image } from './Cast.styled';
import noImage from 'images/noImage.png';

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
        const { cast } = await fetchMovies(CATEGORY, searchQuery);
        setData(cast);
        console.log('data', cast);
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
