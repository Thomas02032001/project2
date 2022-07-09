import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

import { useContext } from "react";
import FavouritesContext from "../../store/favorites-context";

function MainNavigation() {
  const favoritesCtx = useContext(FavouritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
            {/* by default "link" as inbuilt click event listener so that it prevent sending the request to server but it load the page with help of react */}
          </li>
          <li>
            <Link to="/new-meet">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favourites">
              My Favourites
              <span className={classes.badge}>
                {favoritesCtx.totalFavourites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
