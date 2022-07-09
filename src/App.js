// instead of redux we are using the components
// components are provided by the react itself

import { Route, Routes, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetUps from "./pages/AllMeetUps";
import Favourites from "./pages/Favourites";
import NewMeetUp from "./pages/NewMeetUp";

function App() {
  // EX: -  localhost:3000/favourites

  return (
    <Layout>
      <Routes>
        {/* switch is older version and it is not supporting so we are using the routes here and "exact" is used to match exactly with the path */}
        <Route path="/" element={<AllMeetUps />} exact={true} />
        <Route path="/favourites" element={<Favourites />} exact={true} />
        <Route path="/new-meet" element={<NewMeetUp />} exact={true} />
      </Routes>
    </Layout>
  );
}

export default App;
