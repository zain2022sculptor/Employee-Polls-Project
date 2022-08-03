import {
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Button,
} from "@mui/material";
import { useState } from "react";
import { setAuthedUser } from "../actions/authedUser";
import { connect } from "react-redux";
import { useNavigate, useLocation, useParams } from "react-router-dom";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

const Login = (props) => {
  const [user, setUser] = useState("");
  const [disble, setDisable] = useState(true);

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setUser(e.target.value);
    setDisable(false);
    console.log(e.target.value);
  };

  const handleLogin = () => {
    props.dispatch(setAuthedUser(user));
    if (props.path === "/") {
      navigate("/home");
    }
  };

  return (
    <div>
      <h1 className="center">Welcome to Employee Polls App</h1>
      <h3 className="center">Select user to Login</h3>
      <FormControl fullWidth>
        <InputLabel>Select User</InputLabel>
        <Select
          data-testid="select-user"
          labelId="demo-simple-select-label"
          value={user}
          label="Select User"
          onChange={handleChange}
        >
          <MenuItem value={"mtsamis"}>Mike Tsamis</MenuItem>
          <MenuItem value={"sarahedo"}>Sarah Edo</MenuItem>
          <MenuItem value={"tylermcginnis"}>Tyler McGinnis</MenuItem>
          <MenuItem value={"zoshikanlu"}>Zenobia Oshikanlu</MenuItem>
        </Select>
      </FormControl>

      <Button
        data-testid="button"
        sx={{ mt: 4 }}
        fullWidth
        variant="contained"
        onClick={handleLogin}
        disabled={disble}
      >
        Login
      </Button>
    </div>
  );
};

const mapStateToProps = ({}, props) => {
  const path = props.router.location.pathname;
  return {
    path,
  };
};

export default withRouter(connect(mapStateToProps)(Login));
