import {  Routes, Route } from 'react-router-dom';
import Home from "pages/Home";
import Movies from '../pages/Movies';
import MovieDetails from 'components/MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';
// import NotFound from 'path/to/pages/NotFound';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    // <div>
    //   <ul>
    //     <li>
    //       <NavLink to="/">Home</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/movies">Mevies</NavLink>
    //     </li>
    //   </ul>

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />}>
          <Route path=":movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Route>
    </Routes>

    // </div>
    // const key = 59dc723265b7c36b9ba4147a97487c88;
  );
};
