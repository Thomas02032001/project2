import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavouritesContext from "../store/favorites-context";
function Favourites() {
  const favouritesCtx = useContext(FavouritesContext);

  let content;
  if (favouritesCtx.totalFavourites === 0) {
    content = <p>You got no favorites</p>;
  } else {
    content = <MeetupList meetups={favouritesCtx.favourites} />;
  }

  return (
    <section>
      <h1>My Favourites</h1>
      {/* <MeetupList meetups={favouritesCtx.favourites} /> */}
      {content}
    </section>
  );
}
export default Favourites;
