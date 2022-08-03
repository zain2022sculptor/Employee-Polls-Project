import { connect } from "react-redux";
import Login from "./Login";

const PageNotFound = (props) => {
  return (
    <div>
      {props.loggedIn ? (
        <Login />
      ) : (
        <div>
          <h1 className="center">404 Page not found!</h1>
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

export default connect(mapStateToProps)(PageNotFound);
