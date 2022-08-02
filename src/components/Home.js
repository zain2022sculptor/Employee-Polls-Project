import { Fragment, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import ShowQuestion from "./ShowQuestion";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import { handleInitialData } from "../actions/shared";

const Home = (props) => {
  console.log(props);

  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <Fragment>
      <div className="container">
        <Navbar />
        {props.loading === true ? null : (
          <Routes>
            <Route path="/home" exact element={<Dashboard />} />
            <Route path="/new" element={<NewQuestion />} />
            <Route path="/question/:id" element={<ShowQuestion />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ users, questions }) => {
  return {
    loading:
      Object.keys(users).length === 0 && Object.keys(questions).length === 0,
  };
};

export default connect(mapStateToProps)(Home);
