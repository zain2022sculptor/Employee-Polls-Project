import NewQuestionBlock from "./NewQuestionBlock";
import DoneQuestionBlock from "./DoneQuestionBlock";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Dashboard = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (props.loggedIn) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      {props.loggedIn ? (
        <h2>Redirecting to Login</h2>
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
