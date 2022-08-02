import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Leaderboard from "./Leaderboard";
import Navbar from "./Navbar";
import NewQuestion from "./NewQuestion";
import ShowQuestion from "./ShowQuestion";
import { setAuthedUser } from "../actions/authedUser";
import Login from "./Login";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <Fragment>
      <div className="container">
        {props.loggedIn ? <Navbar /> : null}
        {props.loading === true ? null : (
          <div>
            <Routes>
              <Route path="/" exact element={<Login />} />
              <Route path="/home" element={<Dashboard />} />
              <Route path="/new" element={<NewQuestion />} />
              <Route path="/question/:id" element={<ShowQuestion />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
            </Routes>
          </div>
        )}
      </div>
    </Fragment>
  );
}

const mapStateToProps = ({ authedUser, users, questions }) => {
  return {
    loggedIn: !(authedUser === null),
    loading: false,
    //Object.keys(users).length === 0 && Object.keys(questions).length === 0,
  };
};

export default connect(mapStateToProps)(App);
