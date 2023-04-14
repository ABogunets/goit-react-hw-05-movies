// import PropTypes from 'prop-types';
import {
  MovieCardWrapper,
  Image,
  Description,
  Title,
  Overview,
  Genres,
} from 'components/MovieCard/MovieCard.styled';

export const MovieCard = ({ data }) => {
  console.log('data', data);
  const { poster_path, title, overview, vote_average, genres, release_date } =
    data;
  console.log('genre :>> ', genres);
  return (
    <MovieCardWrapper>
      <Image src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
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

// ImageGalleryItem.propTypes = {
//   webImage: PropTypes.string.isRequired,
//   largeImage: PropTypes.string.isRequired,
//   onClick: PropTypes.func,
// };
