import { Outlet } from 'react-router-dom';

const Movies = () => {
  // useEffect робить тут і повна інфо про фільм
  return (
    <div>
      <div>Movies===</div>
     <Outlet/>
    </div>
  );
};
export default Movies;
