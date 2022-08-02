import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { connect } from "react-redux";
import Question from "./Question";

const DoneQuestionBlock = (props) => {
  console.log(props);
  return (
    <div className="containter center">
      <h3>Done Questions</h3>
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
