import { connect } from "react-redux";
import Question from "./Question";

const NewQuestionBlock = (props) => {
  return (
    <div className="containter center">
      <h3>New Questions</h3>
      <div>
        {props.QuestionID.map((id) => {
          return (
            <div key={id}>
              <Question id={id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = ({ users, authedUser, questions }) => {
  const ansQ = Object.keys(users[authedUser].answers);
  const newQ = Object.keys(questions).filter((id) => {
    return !ansQ.includes(id);
  });
  newQ.sort((a, b) => {
    return questions[b].timestamp - questions[a].timestamp;
  });

  return {
    QuestionID: newQ,
  };
};

export default connect(mapStateToProps)(NewQuestionBlock);
