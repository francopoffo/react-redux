import { Fragment } from "react";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";

function App() {
  const loggedIn = useSelector((state) => state.auth.isAuth);

  return (
    <Fragment>
      <Header />
      {!loggedIn ? <Auth /> : <UserProfile />}
    </Fragment>
  );
}

export default App;
