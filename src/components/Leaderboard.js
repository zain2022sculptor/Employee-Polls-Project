import { connect } from "react-redux";
import {
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table,
} from "@mui/material";

const Leaderboard = (props) => {
  console.log(props);
  const userIDs = Object.keys(props.users);

  console.log(userIDs);
  userIDs.sort((a, b) => {
    return props.users[b].questions.length - props.users[a].questions.length;
  });

  console.log(userIDs);

  console.log(Object.keys(props.users[props.authedUser].answers).length);
  return (
    <div>
      <h1>Leaderboard</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Users</TableCell>
            <TableCell>Answered</TableCell>
            <TableCell>Created</TableCell>
          </TableRow>
        </TableHead>
        {userIDs.map((userID) => {
          return (
            <TableBody key={userID}>
              <TableRow>
                <TableCell>
                  <div>{props.users[userID].name}</div>
                  <div>{userID}</div>
                </TableCell>
                <TableCell>
                  {Object.keys(props.users[userID].answers).length}
                </TableCell>
                <TableCell>{props.users[userID].questions.length}</TableCell>
              </TableRow>
            </TableBody>
          );
        })}
      </Table>
    </div>
  );
};

const mapStateToProps = ({ users, authedUser }) => {
  return {
    users,
    authedUser,
  };
};

export default connect(mapStateToProps)(Leaderboard);
