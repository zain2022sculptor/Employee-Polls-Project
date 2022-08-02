import { _saveQuestion } from "./_data";
import { _saveQuestionAnswer } from "./_data";

describe("_saveQuestion", () => {
  it("test1: will return the saved question with expected data when correctly formatted data is passed", async () => {
    const validObject = {
      optionOneText: "Play Tennis",
      optionTwoText: "Play Football",
      author: "mtsamis",
    };

    const result = await _saveQuestion(validObject);
    expect(result.author).toEqual("mtsamis");
  });

  it("test2: will return the saved question with expected data when correctly formatted data is passed", async () => {
    const validObject = {
      optionOneText: "Do something",
      optionTwoText: "Do something else",
      author: "sarahedo",
    };

    const result = await _saveQuestion(validObject);
    expect(result.author).toEqual("sarahedo");
  });

  it("will return an error if invalid object is provided", async () => {
    var invalidObject = "sarahedo";
    await expect(_saveQuestion(invalidObject)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

describe("_saveQuestionAnswer", () => {
  it("test1: will return true if the Anwser of question is saved", async () => {
    var validObject = {
      authedUser: "zoshikanlu",
      qid: "6ni6ok3ym7mf1p33lnez",
      answer: "optionTwo",
    };
    var result = await _saveQuestionAnswer(validObject);
    expect(result).toEqual(true);
  });

  it("test2: will return true if the Anwser of question is saved", async () => {
    var validObject = {
      authedUser: "sarahedo",
      qid: "8xf0y6ziyjabvozdd253nd",
      answer: "optionOne",
    };
    var result = await _saveQuestionAnswer(validObject);
    expect(result).toEqual(true);
  });

  it("will return an error if invalid object is provided", async () => {
    var invalidObject = "sarahedo";
    await expect(_saveQuestionAnswer(invalidObject)).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });
});
