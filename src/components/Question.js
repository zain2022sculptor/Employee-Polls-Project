import { connect } from "react-redux";
import { formatDate } from "../utils/helper";
import { useNavigate } from "react-router-dom";

const Question = (props) => {
  //console.log(props.Question.id);
  const navigate = useNavigate();

  const handleNav = () => {
    navigate(`/question/${props.id}`);
  };
  return (
    <div className="tweet">
      <div>{props.author}</div>
      <div>{props.datetime}</div>

      <button onClick={handleNav}>Show</button>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }, { id }) => {
  const author = questions[id].author;
  const datetime = formatDate(questions[id].timestamp);

  return {
    authedUser,
    author,
    datetime,
  };
};

export default connect(mapStateToProps)(Question);
