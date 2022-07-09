import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

// fetch-get is going to return the promise that is going to be handled by the then
// so we are converting the response data into json
// so it will also return the promise to handle it we are using the "than" again
// but we need to wait until the data we need to get so we are

// dependence are nothing but the "[]" in the useEffect so if you add [isLoading] then when isLoading is changed it will be executing the useEffect

function AllMeetUps() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-4b420-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading....</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      {/* {[<li>l1</li>, <li>l2</li>]} so javascript will directly render the array elements so we need to add objects to array  */}

      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}
export default AllMeetUps;
