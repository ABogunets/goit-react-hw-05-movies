// import PropTypes from 'prop-types';
import {
  MovieCardWrapper,
  Image,
  Description,
  Title,
  Overview,
  Genre,
} from 'components/MovieCard/MovieCard.styled';

export const MovieCard = ({ data }) => {
  const { poster_path, title, overview } = data;
  return (
    <MovieCardWrapper>
      <Image src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
      <Description>
        <Title>{title}</Title>
        <p>User score</p>
        <Overview>Overview</Overview>
        <p>{overview}</p>
        <Genre>Genre</Genre>
        <p>Genre descr</p>
      </Description>
    </MovieCardWrapper>
  );
};

// ImageGalleryItem.propTypes = {
//   webImage: PropTypes.string.isRequired,
//   largeImage: PropTypes.string.isRequired,
//   onClick: PropTypes.func,
// };
