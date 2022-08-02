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
import { useNavigate } from "react-router-dom";

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
    navigate("/home");
  };

  return (
    <div>
      <h1 className="center">Welcome to Employee Polls App</h1>
      <h3 className="center">Select user to Login</h3>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select User</InputLabel>
        <Select
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

export default connect()(Login);
