import { connect } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table,
} from "@mui/material";

const Leaderboard = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (props.authedUser === null) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      {props.authedUser === null ? (
        <h2>Redirecting to Login</h2>
      ) : (
        <div>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Avatars</TableCell>
                <TableCell>Users</TableCell>
                <TableCell>Answered</TableCell>
                <TableCell>Created</TableCell>
              </TableRow>
            </TableHead>
            {props.userIDs.map((userID) => {
              return (
                <TableBody key={userID}>
                  <TableRow>
                    <TableCell>
                      <img
                        src={props.users[userID].avatarURL}
                        alt={`Avatar of ${props.users[userID].name}`}
                        className="avatar center"
                      />
                    </TableCell>
                    <TableCell>
                      <div>{props.users[userID].name}</div>
                      <div>{userID}</div>
                    </TableCell>
                    <TableCell>
                      {Object.keys(props.users[userID].answers).length}
                    </TableCell>
                    <TableCell>
                      {props.users[userID].questions.length}
                    </TableCell>
                  </TableRow>
                </TableBody>
              );
            })}
          </Table>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ users, authedUser }) => {
  const userIDs = Object.keys(users);
  userIDs.sort((a, b) => {
    return users[b].questions.length - users[a].questions.length;
  });

  return {
    userIDs,
    users,
    authedUser,
  };
};

export default connect(mapStateToProps)(Leaderboard);
