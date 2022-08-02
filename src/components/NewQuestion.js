import { useState } from "react";
import { handleAddQuestion } from "../actions/shared";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NewQuestion = (props) => {
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (props.authedUser === null) {
      navigate("/");
    }
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "option1") {
      setOption1(e.target.value);
    } else if (e.target.name === "option2") {
      setOption2(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(option1, option2);
    props.dispatch(handleAddQuestion(option1, option2));
    setOption1("");
    setOption2("");
    navigate("/home");
  };

  return (
    <div>
      {props.authedUser === null ? (
        <h2>Redirecting to Login</h2>
      ) : (
        <div>
          <h3 className="center">Create a new Poll</h3>
          <form className="new-tweet" onSubmit={handleSubmit}>
            <h4 className="center">First Option</h4>
            <textarea
              name="option1"
              value={option1}
              onChange={handleChange}
              placeholder="Enter Option One"
            />
            <h4 className="center">Second Option</h4>
            <textarea
              name="option2"
              value={option2}
              onChange={handleChange}
              placeholder="Enter Option Two"
            />
            <button
              className="btn"
              type="submit"
              disabled={option1 === "" || option2 === ""}
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(NewQuestion);
