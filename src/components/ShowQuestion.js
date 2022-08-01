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
  //console.log("Props form showquestion", props.question);
  const [vote, setVote] = useState(
    props.user.answers[props.id] ? props.user.answers[props.id] : ""
  );

  const [answered, setAnswered] = useState(
    props.user.answers[props.id] ? true : false
  );

  const optionOneAnswers = props.question.optionOne.votes.length;
  const optionTwoAnswers = props.question.optionTwo.votes.length;

  const totalAnswers = optionOneAnswers + optionTwoAnswers;

  //console.log("user answer", userAnwser);

  const handleVote = (e) => {
    e.preventDefault();
    setVote(e.target.value);
    setAnswered(true);
    console.log(e.target.value);

    props.dispatch(handleAddQuestAns(props.id, e.target.value));

    // if (e.target.name === "optionOne") {
    //   const answer = "optionOne";
    //   console.log(props.id, answer);
    //   props.dispatch(handleAddQuestAns(props.id, answer));
    // } else if (e.target.name === "optionTwo") {
    //   console.log("optionTwo");
    // }
  };

  return (
    <div>
      <h2 className="center">Poll by {props.question.author}</h2>
      {answered ? (
        <h5 className="center">Answered by: {totalAnswers} of 4 Employees</h5>
      ) : (
        ""
      )}

      <h4 className="center">Would you rather</h4>

      <div className="center">
        <FormControl>
          <RadioGroup
            name="radio-buttons-group"
            value={vote}
            onChange={handleVote}
          >
            <FormControlLabel
              value="optionOne"
              control={<Radio />}
              label={props.question.optionOne.text}
              disabled={answered}
            />
            {answered ? (
              <div>
                {Math.floor((optionOneAnswers / totalAnswers) * 100)} % answered
                Option One
              </div>
            ) : (
              ""
            )}

            <FormControlLabel
              value="optionTwo"
              control={<Radio />}
              label={props.question.optionTwo.text}
              disabled={answered}
            />
            {answered ? (
              <div>
                {Math.floor((optionTwoAnswers / totalAnswers) * 100)} % answered
                Option Two
              </div>
            ) : (
              ""
            )}
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }, props) => {
  const { id } = props.router.params;
  const question = questions[id];
  const user = users[authedUser];

  return {
    id,
    question,
    user,
  };
};

export default withRouter(connect(mapStateToProps)(ShowQuestion));
