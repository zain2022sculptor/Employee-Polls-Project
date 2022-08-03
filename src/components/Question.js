import { connect } from "react-redux";
import { formatDate } from "../utils/helper";
import { useNavigate } from "react-router-dom";
import { Table, TableBody, TableCell, TableRow } from "@mui/material";

const Question = (props) => {
  const navigate = useNavigate();

  const handleNav = () => {
    navigate(`/questions/${props.id}`);
  };
  return (
    <div>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>{props.author}</TableCell>
            <TableCell>{props.datetime}</TableCell>
            <TableCell>
              <button onClick={handleNav} data-testid="button">
                Show
              </button>
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
