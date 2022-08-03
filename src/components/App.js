import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";
import Navbar from "./Navbar";
import NewQuestion from "./NewQuestion";
import ShowQuestion from "./ShowQuestion";
import Login from "./Login";
import LoadingBar from "react-redux-loading-bar";
import PageNotFound from "./PageNotFound";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <div>
      <LoadingBar />
      <Fragment>
        <div className="container">
          {props.loggedIn ? <Navbar /> : null}
          <div>
            <Routes>
              <Route path="/" exact element={<Login />} />
              <Route path="/home" element={<Dashboard />} />
              <Route path="/add" element={<NewQuestion />} />
              <Route path="/questions/:id" element={<ShowQuestion />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </div>
      </Fragment>
    </div>
  );
}

const mapStateToProps = ({ authedUser, users, questions }) => {
  return {
    loggedIn: !(authedUser === null),
  };
};

export default connect(mapStateToProps)(App);
