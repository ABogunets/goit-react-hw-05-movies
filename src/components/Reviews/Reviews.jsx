import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from 'services/pics-api';
import { Loader } from 'components/Loader/Loader';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { ImHome3 } from 'react-icons/im';
import { List, Title } from './Reviews.styled';

const Reviews = () => {
  const { id } = useParams();
  const CATEGORY = `movie/${id}/reviews`;
  const searchQuery = '';
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    const getMovies = async () => {
      try {
        const { results } = await fetchMovies(CATEGORY, searchQuery);
        setData(results);
        console.log('results', results);
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
      {data.length > 0 ? (
        <List>
          {data.map(item => (
            <li key={item.id}>
              <Title>{`Author: ${item.author}`}</Title>
              <p>{item.content}</p>
            </li>
          ))}
        </List>
      ) : (
        "Sorry, we don't have any reviews for this movie."
      )}
    </div>
  );
};

export default Reviews;
