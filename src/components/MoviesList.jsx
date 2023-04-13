import { Link } from 'react-router-dom';
import { Container, CardWrapper, MovieName } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  return (
    <Container>
      {movies.map(movie => (
        <CardWrapper key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            {movie.title ? (
              <MovieName>{movie.title}</MovieName>
            ) : (
              <MovieName>{movie.name}</MovieName>
            )}
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};
