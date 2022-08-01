import { useState } from "react";
import { handleAddQuestion } from "../actions/shared";
import { connect } from "react-redux";

const NewQuestion = (props) => {
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");

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
  };

  return (
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
  );
};

export default connect()(NewQuestion);
