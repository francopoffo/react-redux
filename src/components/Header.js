import classes from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AuthActions } from "../store";

const Header = () => {
  const dispatch = useDispatch();

  const loggedIn = useSelector((state) => state.auth.isAuth);

  const onLogoutHandler = () => {
    dispatch(AuthActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {loggedIn && (
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={onLogoutHandler}>Logout</button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
