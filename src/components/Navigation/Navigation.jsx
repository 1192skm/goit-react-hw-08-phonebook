import { NavLink } from 'react-router-dom';
// import { useAuth } from 'hooks';
import css from './Navigation.module.css';

export function Navigation () {
  //   const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      <NavLink className={css.link} to="/contacts">
        Contacts
      </NavLink>
    </nav>
  );
};
