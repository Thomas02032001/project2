import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";

function NewMeetUp() {
  const history = useNavigate();
  function addMeetupHandler(meetupDate) {
    fetch(
      "https://react-getting-started-4b420-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupDate),
        headers: {
          "Content-type": "application/json",
        },
      }
    ).then(() => {
      history("/");
    });
    // we need to add "json" at the last of the  "url" because it is spacific by the "firebase"
    // while we are adding data to the "body" then we need to first convert to json format only
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
export default NewMeetUp;
