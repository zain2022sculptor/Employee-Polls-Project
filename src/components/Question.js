import { connect } from "react-redux";
import { formatDate } from "../utils/helper";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const Question = (props) => {
  //console.log(props.Question.id);
  const navigate = useNavigate();

  const handleNav = () => {
    navigate(`/question/${props.id}`);
  };
  return (
    <div>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>{props.author}</TableCell>
            <TableCell>{props.datetime}</TableCell>
            <TableCell>
              <button onClick={handleNav}>Show</button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
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
