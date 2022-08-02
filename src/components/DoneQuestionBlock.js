import { connect } from "react-redux";
import Question from "./Question";

const DoneQuestionBlock = (props) => {
  return (
    <div className="containter center">
      <h3>Answered Questions</h3>
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

const mapStateToProps = ({ users, authedUser }) => {
  const ansQ = Object.keys(users[authedUser].answers);

  return {
    QuestionID: ansQ,
  };
};

export default connect(mapStateToProps)(DoneQuestionBlock);
