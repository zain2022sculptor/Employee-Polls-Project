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

function App(props) {
  console.log("props in app", props);
  props.dispatch(setAuthedUser("sarahedo"));
  console.log("props in app", props);
  return <Home />;
}

const mapStateToProps = () => ({});

export default connect()(App);
