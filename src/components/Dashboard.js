import NewQuestionBlock from "./NewQuestionBlock";
import DoneQuestionBlock from "./DoneQuestionBlock";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Login from "./Login";

const Dashboard = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (props.loggedIn) {
      //navigate("/");
    }
  }, []);

  return (
    <div>
      {props.loggedIn ? (
        <Login />
      ) : (
        <div data-testid="result">
          <NewQuestionBlock />
          <DoneQuestionBlock />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return {
    loggedIn: authedUser === null,
  };
};

export default connect(mapStateToProps)(Dashboard);
