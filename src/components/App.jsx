import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import MoviesDetails from '../pages/MoviesDetails';
import Movies from '../pages/Movies';
import { Cast } from './Cast';
import { Reviews } from './Reviews';
import { SharedLayout } from './SharedLayout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
