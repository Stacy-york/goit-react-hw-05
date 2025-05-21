import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={css.navbar}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${css.navlink} ${css.active}` : css.navlink
        }
        end
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) =>
          isActive ? `${css.navlink} ${css.active}` : css.navlink
        }
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;