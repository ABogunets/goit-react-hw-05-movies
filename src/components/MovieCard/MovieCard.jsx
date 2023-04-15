import PropTypes from 'prop-types';
import {
  MovieCardWrapper,
  Image,
  Description,
  Title,
  Overview,
  Genres,
} from 'components/MovieCard/MovieCard.styled';
import noImage from 'images/noImage.png';

export const MovieCard = ({ data }) => {
  const { poster_path, title, overview, vote_average, genres, release_date } =
    data;
  return (
    <MovieCardWrapper>
      <Image
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : noImage
        }
        alt={title}
      />
      <Description>
        <Title>{`${title} (${release_date.slice(0, 4)})`}</Title>
        <p>User Score: {Math.round(vote_average * 10)}%</p>
        <Overview>Overview</Overview>
        <p>{overview}</p>
        <Genres>Genres</Genres>
        <p>
          {genres.map(genre => (
            <span key={genre.id}>{genre.name} </span>
          ))}
        </p>
      </Description>
    </MovieCardWrapper>
  );
};

MovieCard.propTypes = {
  data: PropTypes.object,
};
