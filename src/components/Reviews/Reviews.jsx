import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from 'services/pics-api';
import { Loader } from 'components/Loader/Loader';
import { List, Title } from './Reviews.styled';
import { Error } from 'components/Error.styled';

const Reviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const { id } = useParams();

  const CATEGORY = `movie/${id}/reviews`;
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
  }, [CATEGORY]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <Error>{error}</Error>}
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
