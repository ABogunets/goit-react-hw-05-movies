import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, CardWrapper, MovieName } from './MoviesList.styled';
import { useLocation } from 'react-router-dom';

export const MoviesList = ({ data }) => {
  const location = useLocation();
  return (
    <Container>
      {data.map(item => (
        <CardWrapper key={item.id}>
          <Link to={`/movies/${item.id}`} state={{ from: location }}>
            {item.title ? (
              <MovieName>{item.title}</MovieName>
            ) : (
              <MovieName>{item.name}</MovieName>
            )}
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};

MoviesList.propTypes = {
  data: PropTypes.array,
};
