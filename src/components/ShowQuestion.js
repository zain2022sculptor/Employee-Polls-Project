import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { handleAddQuestAns } from "../actions/shared";
import { useState } from "react";
import Login from "./Login";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import PageNotFound from "./PageNotFound";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

const ShowQuestion = (props) => {
  const navigate = useNavigate();
  const [vote, setVote] = useState("");
  const [answered, setAnswered] = useState(false);

  const question = props.questions[props.id];
  const user = props.users[props.authedUser];
  const avatar = question ? props.users[question.author].avatarURL : "";

  useEffect(() => {
    if (question && user) {
      setVote(user.answers[props.id] ? user.answers[props.id] : "");
      setAnswered(user.answers[props.id] ? true : false);
    }
  }, []);

  if (!question || !user) {
    return <PageNotFound />;
  }

  // const [vote, setVote] = useState(
  //   user.answers[props.id] ? user.answers[props.id] : ""
  // );

  // const [answered, setAnswered] = useState(
  //   user.answers[props.id] ? true : false
  // );

  const optionOneAnswers = question.optionOne.votes.length;
  const optionTwoAnswers = question.optionTwo.votes.length;

  const totalAnswers = optionOneAnswers + optionTwoAnswers;

  const handleVote = (e) => {
    e.preventDefault();
    setVote(e.target.value);
    setAnswered(true);
    console.log(e.target.value);

    props.dispatch(handleAddQuestAns(props.id, e.target.value));
  };

  return (
    <div>
      {props.loggedIn ? (
        <Login />
      ) : (
        <div>
          <div className="question" data-testid="button">
            <img
              src={avatar}
              alt={`Avatar of ${question.author}`}
              className="avatar"
            />
            <h2 className="center">Poll by {question.author}</h2>
          </div>
          {answered ? (
            <h5 className="center" data-testid="show-answers">
              Answered by: {totalAnswers} of 4 Employees
            </h5>
          ) : (
            ""
          )}

          <h4 className="center">Would you rather</h4>

          <div className="center">
            <FormControl>
              <RadioGroup
                name="radio-buttons-group"
                data-testid="radio-button"
                value={vote}
                onChange={handleVote}
              >
                <FormControlLabel
                  value="optionOne"
                  control={<Radio />}
                  label={question.optionOne.text}
                  disabled={answered}
                />
                {answered ? (
                  <div>
                    {Math.floor((optionOneAnswers / totalAnswers) * 100)} %
                    answered Option One
                  </div>
                ) : (
                  ""
                )}

                <FormControlLabel
                  value="optionTwo"
                  control={<Radio />}
                  label={question.optionTwo.text}
                  disabled={answered}
                />
                {answered ? (
                  <div>
                    {Math.floor((optionTwoAnswers / totalAnswers) * 100)} %
                    answered Option Two
                  </div>
                ) : (
                  ""
                )}
              </RadioGroup>
            </FormControl>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }, props) => {
  const { id } = props.router.params;

  return {
    loggedIn: authedUser === null,
    id,
    questions,
    users,
    authedUser,
  };
};

export default withRouter(connect(mapStateToProps)(ShowQuestion));
